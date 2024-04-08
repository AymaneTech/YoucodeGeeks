<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;
use App\Services\Contracts\CommentServiceInterface;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\JsonResponse;

class CommentController extends BaseApiController
{
    use AuthorizesRequests;
    public function __construct(public CommentServiceInterface $service)
    {
    }

    public function store(StoreCommentRequest $request): JsonResponse
    {
        $comment = $this->service->create($request->createDTO());
        return $this->sendResponse(
            message: "comment created successfully",
            result: $comment,
            code: 201
        );
    }

    public function update(UpdateCommentRequest $request, Comment $comment): JsonResponse
    {
        $this->service->update($request->createDTO(), $comment);
        return $this->sendResponse(
            message: "comment updated successfully",
            code: 204
        );
    }

    public function destroy(Comment $comment): JsonResponse
    {
        $this->authorize("delete", $comment);
        $this->service->delete($comment);
        return $this->sendResponse(
            message: "comment deleted successfully",
            code: 204
        );
    }
}
