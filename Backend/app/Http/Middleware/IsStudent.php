<?php

namespace App\Http\Middleware;

use App\Enums\Role;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsStudent
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if($request->user()->role_id  !== Role::STUDENT->value && $request->user()->role_id !== Role::ADMIN->value && $request->user()->role_id  !== Role::COACH->value ){
            return response()->json(data: ["message" => "You are not a student to have access here (middleware)"], status: 403);
        }
        return $next($request);
    }
}
