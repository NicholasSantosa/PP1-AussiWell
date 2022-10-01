<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::inertia('/', 'Home/Page')->middleware('guest');
Route::inertia('/login', 'Auth/Login')->middleware('guest')->name('login');
Route::post('/login', [AuthController::class, 'Login'])->middleware('guest');

Route::get('/logout', [AuthController::class, 'Logout'])->middleware('auth');

Route::post('/sign-up', [AuthController::class, 'SignUp'])->middleware('guest');
Route::inertia('/sign-up', 'Auth/Signup')->middleware('guest');

Route::inertia('/dashboard', 'Dashboard/Page')->middleware('auth');