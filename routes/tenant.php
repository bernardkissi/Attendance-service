<?php

use App\Actions\Members\CreateMember;
use App\Actions\Qrcode\CreateServiceQrcode;
use App\Actions\Qrcode\GenerateServiceQrcodePdf;
use App\Actions\Service\CreateService;
use App\Actions\Service\ManageService;
use App\Domain\Filters\Scopes\DateScope;
use App\Domain\Filters\Scopes\MemberScope;
use App\Domain\Filters\Scopes\MonthScope;
use App\Domain\Filters\Scopes\YearScope;
use App\Domain\Reporter\ReportingService;
use App\Domain\Summaries\AttendanceSummary;
use App\Domain\Summaries\MemberSummary;
use App\Domain\Summaries\QrcodeSummary;
use App\Domain\Summaries\ServiceOccurrenceSummary;
use App\Domain\Tenants\TenantManager;
use App\DTOs\FilterQueryDTO;
use App\DTOs\MemberDTO;
use App\DTOs\NonExpirableServiceDTO;
use App\DTOs\OneTimeServiceDTO;
use App\DTOs\RecurringServiceDTO;
use App\Enums\ReportType;
use App\Enums\ServiceType;
use App\Imports\MembersImport;
use App\Models\Attendance;
use App\Models\Group;
use App\Models\Member;
use App\Models\Qrcode;
use App\Models\Service;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/members', function (Request $request) {
    $members = Member::all();

    return $members;
})->middleware('tenant');

Route::get('/members/{member}', function (Request $request, Member $member) {
    return $member->name;
})->middleware('tenant');

Route::get('/configuration', function () {
    $tenant = app(TenantManager::class);

    return $tenant = app(TenantManager::class)->getTenantConfig()->options;
    // Config::set('tenant.config', Configuration::find(5));
    // return Config::get('tenant.config.options');
});

Route::get('/services', function () {
    return Service::query()->get();
});

Route::get('/services/create', function (Request $request) {

    $serviceDTO = match ($request->type) {
        ServiceType::NON_EXPIRABLE->value => NonExpirableServiceDTO::fromRequest($request),
        ServiceType::ONE_TIME->value => OneTimeServiceDTO::fromRequest($request),
        ServiceType::RECURRING->value => RecurringServiceDTO::fromRequest($request),
        default => throw new \InvalidArgumentException('Service type is not supported')
    };

    $service = new CreateService($serviceDTO);

    return $service->exec();
});

Route::get('/services/{service}/attendees', function (Request $request, Service $service) {

    // $service->groups()->attach($request->groupIds);
    // $service->tags()->attach($request->tagIds);

    return [
        'expected' => $expected = $service->expectedAttendees,
        'expected_count' => $expected->count(),
        'absentees' => $absentees = $service->absentees,
        'absentees_count' => $absentees->count(),
        'attendees' => $attendees = $service->attendees,
        'attendees_count' => $attendees->count(),
    ];
});

Route::post('qrcodes/pdf', function () {
    $qrcode = Qrcode::first();
    $generator = new GenerateServiceQrcodePdf($qrcode);

    return $generator->exec();
});

// Route::get('/qrcodes/create', function (Request $request) {
//     $serviceQrCodeDTO = ServiceQrCodeDTO::fromRequest($request);

//     $qrcode = CreateServiceQrcode::create($serviceQrCodeDTO);

//     return response()->json([
//         'message' => 'Successfully created',
//         'data' => $qrcode,
//         200,
//     ]);
// });

Route::get('/member/create', function (Request $request) {
    $memberDto = MemberDTO::fromRequest($request);

    return CreateMember::create($memberDto);
    //Excel::toCollection(new MembersImport, filePath: $request->file, readerType: 'csv');
});

Route::post('/member/import', function (Request $request) {
    dd($request->file('file'));
    //Excel::toCollection(new MembersImport, filePath: $request->file, readerType: 'csv');
});

Route::get('/services/{service}', function (Request $request, Service $service) {

    $dto = match ($service->type) {
        'non-expirable-service' => NonExpirableServiceDTO::fromRequest($request),
        'one-time-service' => OneTimeServiceDTO::fromRequest($request),
        'recurring-service' => RecurringServiceDTO::fromRequest($request),
    };

    ManageService::modify($service, $dto);

    return response()->json(['message' => 'hello world']);
});

Route::get('report', function (Request $request) {
    $queryDTO = FilterQueryDTO::fromRequest($request);

    return $queryDTO->toArray();
});

Route::get('generate/report', function (Request $request) {
    $scopes = [
        'year' => new YearScope(),
        'month' => new MonthScope(),
        'members' => new MemberScope(),
        'date' => new DateScope(),
    ];

    return Attendance::withFilter($scopes)->get();
});

Route::get('aggregator', function (Request $request) {
    //for home page grapgh
    // $filterDTO = FilterQueryDTO::fromRequest($request);
    // $summary = new AttendanceSummary();

    // return $summary->summarize($filterDTO);

    // for general reports
    // $type = ReportType::MONTHLY;
    // $report = new ReportingService($type);
    // return $report->generateReport();

    // specific qrcode details
    $qrcode = Qrcode::find(3);
    $qrcodeSummary = new QrcodeSummary($qrcode);

    return $qrcodeSummary->summarize();

    //service occurences
    // $service = Service::find(1);
    // $serviceoccurences = new ServiceOccurrenceSummary($service);

    // return $serviceoccurences->summarize();

    //member summary
    // $member = Member::find(3);
    // $member = new MemberSummary();
    // return $member->summarize();

});

Route::get('/groups', function () {
    return Group::query()->get();
});

Route::get('/groups/assign/{member}', function (Request $request, Member $member) {
    $member->groups()->syncWithoutDetaching($request->group_id);

    return Group::find($request->group_id)->members()->get();
});

Route::get('/tags', function () {
    return Tag::query()->get();
});

Route::get('/tags/assign/{member}', function (Request $request, Member $member) {
    $member->tags()->syncWithoutDetaching($request->tag_id);

    return Tag::find($request->tag_id)->members()->get();
});

Route::get('/group/assign/tags/{group}', function (Request $request, Group $group) {
    $tags = Tag::whereIn('id', $request->tags)->get();

    // get all members of the tags to be assigned
    $members = $tags->map(fn (Tag $tag) => $tag->members->pluck('id'))
        ->flatten()
        ->unique()
        ->toArray();

    $group->members()->syncWithoutDetaching($members);

    return $group->members->pluck('name')->unique();
});

Route::get('/search', function (Request $request) {
    return Member::search($request->search)->get();
});
