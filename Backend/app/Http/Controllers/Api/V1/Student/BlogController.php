<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Models\Blog;
use App\Services\Contracts\PostServiceInterface;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\JsonResponse;

class BlogController extends BaseApiController
{
    use AuthorizesRequests;

    public function __construct(
        public PostServiceInterface $service)
    {
    }

    public function index(): JsonResponse
    {
        return $this->sendResponse(
            message: "question create successfully",
            result: $this->service->all(),
        );
    }

    public function store(StoreBlogRequest $request): JsonResponse
    {
        $blog = $this->service->create($request->createDTO());

        return $this->sendResponse(
            message: "blog create successfully",
            result: $blog,
            code: 201
        );
    }

    public function show(Blog $blog): JsonResponse
    {
        try {
            $result = $this->service->show($blog);
            $relatedBlogs = $this->service->relatedBlogs($blog);
            return $this->sendResponse(
                message: "",
                result: [
                    "blog" => $result,
                    "relatedBlogs" => $relatedBlogs
                ],
            );
        }catch (\Exception $e) {
            return $this->sendError(error: $e->getMessage());
        }
    }

    public function update(UpdateBlogRequest $request, Blog $blog): JsonResponse
    {
        $this->service->update(post: $blog, DTO: $request->createDTO());
        return $this->sendResponse(
            message: "question updated successfully",
            code: 204
        );
    }

    public function destroy(Blog $blog): JsonResponse
    {
        $this->authorize("delete", $blog);
        $blog->delete();
        return $this->sendResponse(
            message: "question deleted successfully",
            code: 204
        );
    }

    public function findByTag($param)
    {
        try {
            $blogs = $this->service->findByTag($param);
            return $this->sendResponse(
                message: "posts filtered successfully",
                result: $blogs,
            );
        } catch (\Exception $e) {
            return $this->sendError(
                error: $e->getMessage(),
                code: 500
            );
        }
    }

}
