# Features

[] protect actions with policies in request form or policies
members
    [x] create,
    [x] update,
    [x] delete members
    [x] import members from csv file

service
    [X] create,
    [] update,
    [x] delete
    [?] create service from csv file

qrcodes
    [X] create,
    [x] modify,
    [x] delete

logins
    [] session login  [ super admin, branch login]
    [X] api login
    [] api logout
    [] session logout

data analytics
    [] reports statistics
notification
    [] Branch Notifications

end to end
    [X] attendance recording flow
    [] user testing edge cases

## Search Parameters

[X] service

[X] Analytics

    [X]  Attendance

    [X]  Absentees

    [X}  Gender

[X] GroupBy

    [X] Year

    [X] Month

http://localhost.com?year=2023&filter=absentees&groupby=year

report generation feature

1. user can select a service
2. get attendance per month and all details
3. get people associated with it and the number times they attended the service

   a. i know how to get the members

   b. I dont know how

Edge cases:

<!-- 1. idempotentce: the user can do x times but the will not add additional payload if he/she is recorded. -->

2. in the Qrcode middleware,
   check if the login member belong to the branch for the qrcode is created
3. if no qrcode is active, immediately return to the user service has no started.
4. How to handle joint program

for joint service
    - in branch configuration, allow joint service...
    - once that is enabled,
        - members from other branches will be able to record attendance during the joint service.
        - how to we mark this as joint:
            - attendance will have a field called is jointService.
        - allow cross branch attendance




// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();

// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();

// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();

// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();

// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();

// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();

// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();

// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();

// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();

// $queryDTO = FilterQueryDTO::fromRequest($request);

// $report = new AttendanceSummarizer();

// $query = $report->buildQuery($queryDTO)->get();

// return $query;

// $scopes = [

//     'year' => new YearScope(),

//     'month' => new MonthScope(),

//     'members' => new MemberScope(),

//     'date' => new DateScope(),

//     'service' => new ServiceScope()

// ];

// // generate count per month

// $report = Attendance::query()

// ->withFilter($scopes)

// ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')

// ->selectRaw('COUNT(member_id) AS attendance')

// ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')

// ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')

// ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')

// ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')

// ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')

// ->leftJoin('members', 'members.id', '=', 'attendances.member_id')

// ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')

// ->join('services', 'services.id', '=', 'attendances.service_id')

// ->groupBy('year', 'month', 'service')

// ->get();

// return $report;

//eturn $report->pluck('member_id')->get();

// return $report->map( function (Attendance $attendance) {

//     return [

//         'service'  => $attendance->service,

//         'year' => $attendance->year,

//         'month' => $attendance->month,

//         'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))->toArray()))->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])->values(),

//         'attendance_count' => $attendance->attendance,

//         'service_occurences_per_month' => $attendance->service_occurences_per_month,

//         'expected_attendance_per_month' => $attendance->expected_attendance_per_month,

//     ];

// })->groupBy(['month','service']);

// return Attendance::query()

//     ->withFilter($scopes)

//     ->selectRaw('YEAR(recorded_at) AS year, MONTH(recorded_at) AS month, qrcode_id, service_id')

//     ->selectRaw('COUNT(member_id) AS attendance')

//     ->selectRaw('(SELECT COUNT(id) FROM members) - COUNT(member_id) AS absence')

//     ->with('service:id,name')

//     ->groupBy('year', 'month', 'qrcode_id', 'service_id')

//     ->get();
