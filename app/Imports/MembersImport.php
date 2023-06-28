<?php

namespace App\Imports;

use App\Models\Member;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class MembersImport implements ToModel, WithHeadingRow, WithValidation, WithBatchInserts
{
    use Importable;

    /**
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Member([
            'identifier' => Str::uuid()->toString(),
            'name' => $row['name'],
            // 'email' => $row['email'],
            'pin' => isset($row['pin']) ? $row['pin'] : rand(1000, 9000),
            'phone' => $row['phone'],
            'memberId' => isset($row['member_id']) ? $row['member_id'] : (string) rand(10000, 50000), // pre-fix branch code
            'branch_id' => isset($row['branch_id']) ? $row['branch_id'] : auth()->user()->branch_id,
        ]);
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['nullable', 'email'],
            'phone' => ['required'],
        ];
    }

    // The chunk size members are loaded from the csv file
    public function batchSize(): int
    {
        return 500;
    }

    public function uniqueBy()
    {
        return 'phone';
    }
}
