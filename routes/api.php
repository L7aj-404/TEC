<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AxeController;
use App\Http\Controllers\PosteController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RequesteController;
use App\Http\Controllers\ServiceController;
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
Route::post('/adduser', [UserController::class,'addUser']);
Route::post('/login', [UserController::class,'login']);
Route::post('/restpassword', [UserController::class,'restpassword'])->middleware('guest');
Route::post('/user/Verifypassword/{id}/{token}', [UserController::class,'Verifypassword'])->middleware('guest');
Route::get('/infos/{id}', [UserController::class,'info']);
Route::get('/users', [UserController::class,'users']);
Route::delete('/user/{id}', [UserController::class,'deleteUser']);
Route::get('/user/count', [UserController::class,'conteUser']);
Route::resource('requeste',RequesteController::class);
Route::get('requestecount',[RequesteController::class,'conteRequeste']);
Route::resource('poste',PosteController::class);
Route::get('/postecount',[PosteController::class,'contePost']);
Route::resource('service',ServiceController::class);
Route::resource('axe',AxeController::class);
Route::get('about',[AboutController::class,'index']);
Route::post('about',[AboutController::class,'store']);
Route::resource('project',ProjectController::class);

