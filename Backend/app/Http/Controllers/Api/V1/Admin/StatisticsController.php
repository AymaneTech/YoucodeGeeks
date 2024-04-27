<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\BaseApiController;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Coach;
use App\Models\Question;
use App\Models\Student;
use Exception;
use Illuminate\Http\Request;

class StatisticsController extends BaseApiController
{
    public function statistics () {
        try{
            return $this->sendResponse(
                message: "statistics fetched successfully",
                result: [
                    "students" => Student::count(),
                    "coaches" => Coach::count(),
                    "blogs" => Blog::count(),
                    "questions" => Question::count(),
                ],
            );
        } catch (Exception $e) {
            return $this->sendError(error: $e->getMessage(), code: $e->getCode());
        }
    }
}
