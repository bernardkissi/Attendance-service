<?php

declare(strict_types=1);

namespace App\Domain\Qrcodes\Traits;

use App\Models\Group;
use App\Models\Tag;
use Illuminate\Support\Collection;

trait HasAttendees
{
    public function getExpectedAttendeesCountAttribute(): int
    {
        $taggedMembersCount = $this->tags()
            ->withCount(['members'])->get()
            ->map(fn (Tag $tag) => $tag->members_count)
            ->sum();

        $groupedMembersCount = $this->groups()
            ->withCount(['members'])->get()
            ->map(fn (Group $group) => $group->members_count)
            ->sum();

        return $taggedMembersCount + $groupedMembersCount;
    }

    public function getExpectedAttendeesAttribute(): Collection
    {
        //caching
        $taggedMembers = $this->tags()
            ->withOnly(['members:id,identifier,name'])->get()
            ->pluck('members')->flatten()
            ->map(fn ($member) => [
                'id' => $member->id,
                'identifier' => $member->identifier,
                'name' => $member->name,
            ]);

        $groupedMembers = $this->groups()
            ->withOnly(['members:id,identifier,name'])->get()
            ->pluck('members')->flatten()
            ->map(fn ($member) => [
                'id' => $member->id,
                'identifier' => $member->identifier,
                'name' => $member->name,
            ]);

        $totalMembers = $taggedMembers->merge($groupedMembers);

        return $totalMembers;
    }

    public function getAbsenteesCountAttribute(): int
    {
        return $this->absentees->count();
    }

    public function getAbsenteesAttribute(): Collection
    {
        return $this->expectedAttendees
            ->whereNotIn('id', $this->attendances()->pluck('member_id')->toArray())
            ->values();
    }

    public function getAttendeesCountAttribute(): int
    {
        return $this->attendances->count();
    }

    public function getAttendeesAttribute(): Collection
    {
        return $this->attendances()->withOnly('member:id,name,identifier')->get()
            ->pluck('member')->flatten()
            ->map(fn ($member) => [
                'id' => $member->id,
                'identifier' => $member->identifier,
                'name' => $member->name,
            ]);
    }
}
