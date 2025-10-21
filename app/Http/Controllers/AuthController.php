<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\User;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = Validator::make($request -> all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:8'
        ]);

        if ($validated -> fails()) {
            return response() -> json($validated -> errors(), 422);
        }

        $user = User::create([
            'name' => $request -> name,
            'email' => $request -> email,
            'password' => bcrypt($request -> password)
        ]);

        if ($user) {
            return response() -> json([
                'success' => true,
                'message' => 'User created successfully.',
                'data' => $user
            ], 201);
        }

        return response() -> json([
            'success' => false,
            'message' => 'User creation faild.'
        ], 409);
    }

    public function login(Request $request)
    {
        $validated = Validator::make($request -> all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validated -> fails()) {
            return response() -> json($validated -> errors(), 422);
        }

        $credentials = $request -> only('email', 'password');

        if (!$token = auth() -> guard('api') -> attempt($credentials)) {
            return response() -> json([
                'success' => false,
                'message' => 'Email atau Password Anda salah!'
            ], 401);
        }

        return response() -> json([
            'success' => true,
            'message' => 'Login successfully.',
            'user' => auth() -> guard('api') -> user(),
            'token' => $token,
        ], 200);
    }
}
