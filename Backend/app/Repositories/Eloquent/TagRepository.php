<?php

namespace App\Repositories\Eloquent;

use App\DTO\Requests\TagDTO;
use App\Models\Tag;
use App\Repositories\Contracts\TagRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

/**
 * Class TagRepository.
 */
class TagRepository implements TagRepositoryInterface
{
    public function all(): Collection|array
    {
        return Tag::all();
    }

    public function create(TagDTO $DTO): Tag
    {
        return Tag::create([
            "name" => $DTO->name,
        ]);
    }

    public function update(Tag $tag, TagDTO $DTO): bool
    {
        return $tag->update(["name" => $DTO->name]);

    }

    public function delete(Tag $tag): bool
    {
        return $tag->delete();
    }

    public function show(Tag $tag): Tag
    {
        return $tag;
    }
}
