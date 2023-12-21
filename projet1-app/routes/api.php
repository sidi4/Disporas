<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\UsermauritaniController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum', 'isAPIAdmin'])->group(function() {
Route::get('/checkingAuthenticated', function(){
return response()->json(['message'=>'You are in', 'status'=>200], 200);
});

});

Route::middleware(['auth:sanctum'])->group(function() {
Route::post('logout', [AuthController::class, 'logout']);

});

// Auth
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('dashboard', [UserController::class, 'index']);
Route::get('edit/{id}', [UserController::class, 'edit']);
Route::put('updateUser/{id}', [AuthController::class, 'update']);
Route::delete('delete/{id}', [UserController::class, 'destroy']);


// Dispora
Route::get('usermauri', [UsermauritaniController::class, 'index']);
Route::post('ajouter-user', [UsermauritaniController::class, 'store']);
Route::put('modiferDispor/{id}', [UsermauritaniController::class, 'update']);
Route::delete('deleteDispor/{id}', [UsermauritaniController::class, 'destroy']);
Route::get('editDiaspora/{id}', [UsermauritaniController::class, 'edit']);
