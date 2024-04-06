<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;
use App\Services\Contracts\CommentServiceInterface;

class CommentController extends BaseApiController
{
    public function __construct(public CommentServiceInterface $service)
    {
    }

    public function store(StoreCommentRequest $request)
    {
        $comment = $this->service->create($request->createDTO());
        return $this->sendResponse(
            message: "comment created successfully",
            result: $comment,
            code: 201
        );
    }

    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        $this->service->update($request->createDTO(), $comment);
        return $this->sendResponse(
            message: "comment updated successfully",
            code: 204
        );
    }

    public function destroy(Comment $comment)
    {
        $this->service->delete($comment);
        return $this->sendResponse(
            message: "comment deleted successfully",
            code: 204
        );
    }
}
