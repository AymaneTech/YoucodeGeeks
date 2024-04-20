<?php

namespace App\Repositories\Contracts;

use App\DTO\Requests\TagDTO;
use App\Models\Post;
use App\Models\Tag;

interface TagRepositoryInterface
{
    public function all();

    public function create(TagDTO $DTO): Tag;

    public function update(Tag $tag, TagDTO $DTO): bool;

    public function show(Tag $tag): Tag;

    public function delete(Tag $tag): bool;

    public function syncTags(Post $post, array $tags);
}
