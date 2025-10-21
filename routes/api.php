<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController; 

Route::get('/user', function (Request $request) { 
    return $request->user(); 
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::apiResource('/books', BookController::class) -> only(['index', 'show']);
Route::apiResource('/genres', GenreController::class) -> only(['index', 'show']);
Route::apiResource('/authors', AuthorController::class) -> only(['index', 'show']);

Route::middleware(['auth:api', 'role:admin'])->group(function () {
    Route::apiResource('/books', BookController::class) -> only(['store', 'update', 'destroy']);
    Route::apiResource('/genres', GenreController::class) -> only(['store', 'update', 'destroy']);
    Route::apiResource('/authors', AuthorController::class) -> only(['store', 'update', 'destroy']);
});