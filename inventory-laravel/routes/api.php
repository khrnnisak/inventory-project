<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProuductController;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/products', [ProuductController::class, 'index']);
Route::get('/products/{id}', [ProuductController::class, 'show']);
Route::get('/products/search/{name}', [ProuductController::class, 'search']);


// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/products/add', [ProuductController::class, 'store']);
    Route::put('/products/{id}', [ProuductController::class, 'update']);
    Route::delete('/products/{id}', [ProuductController::class, 'destroy']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
