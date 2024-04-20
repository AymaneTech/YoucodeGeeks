<?php

namespace App\Services\Contracts;

use App\DTO\Requests\TagDTO;
use App\Models\Post;
use App\Models\Tag;

interface TagServiceInterface
{
    public function all();

    public function show(Tag $tag);

    public function create(TagDTO $DTO);

    public function update(Tag $tag, TagDTO $DTO);

    public function delete(Tag $tag);
    public function syncTags(Post $post, array $tags);

}
