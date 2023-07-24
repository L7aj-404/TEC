<?php

use App\Http\Controllers\PosteController;
use App\Http\Controllers\RequesteController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('/signup', [UserController::class,'signup']);
Route::post('/login', [UserController::class,'login']);
Route::get('/infos/{id}', [UserController::class,'info']);
Route::get('/users', [UserController::class,'users']);
Route::delete('/user/{id}', [UserController::class,'deleteUser']);
Route::get('/user/count', [UserController::class,'conteUser']);
Route::resource('requeste',RequesteController::class);
Route::get('requestecount',[RequesteController::class,'conteRequeste']);
Route::resource('poste',PosteController::class);
Route::get('/postecount',[PosteController::class,'contePost']);

