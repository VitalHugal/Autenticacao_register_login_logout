<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::apiResource("/register", RegisterController::class);
Route::apiResource("/login", LoginController::class);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('/home', HomeController::class);
    Route::post('/logout', [LogoutController::class, 'logout']);
});