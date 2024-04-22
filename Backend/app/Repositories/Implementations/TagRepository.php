<?php

namespace App\Repositories\Implementations;

use App\DTO\Requests\TagDTO;
use App\Models\Post;
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

    public function update(Tag $tag, TagDTO $DTO): Tag
    {
        $tag->update(["name" => $DTO->name]);
        return $tag;

    }

    public function delete(Tag $tag): bool
    {
        return $tag->delete();
    }

    public function show(Tag $tag): Tag
    {
        return $tag;
    }
    public function syncTags(Post $post, array $tags)
    {
        $tagModels = collect($tags)
            ->map(function ($tag) {
                return Tag::firstOrCreate([
                    'name' => $tag,
                ]);
            });

        $post->tags()->sync($tagModels->pluck('id'));
    }
}
