<?php

namespace App\Actions;

use App\DTO\Requests\StudentDTO;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Repositories\Implementations\UserRepository;
use Tymon\JWTAuth\Exceptions\JWTException;

class CreateStudentAction
{
    public function __construct(public UserRepositoryInterface $repository)
    {
    }

    public function handle(StudentDTO $DTO)
    {
        try {
            $student = $this->repository->create($DTO);
            return [
                "token" => auth()->login($student),
                "student" => $student
            ];
        } catch (JWTException $e) {
            throw new JWTException("Could not create student");
        }
    }

}
