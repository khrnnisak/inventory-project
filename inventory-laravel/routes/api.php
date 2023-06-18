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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('products',ProuductController::class);

// Public routes
// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);
// Route::get('/products/', [ProuductController::class, 'index']);
// Route::get('/products/{kode_barang}', [ProuductController::class, 'show']);
// Route::get('/products/search/{name}', [ProuductController::class, 'search']);
// Route::post('/products/add', [ProuductController::class, 'store']);
// Route::get('/products/edit/{id}', [ProuductController::class, 'update']);
// Route::delete('/products/delete/{id}', [ProuductController::class, 'destroy']);
// Route::post('/logout', [AuthController::class, 'logout']);


// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    
    
});

