<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;

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

Route::inertia('/', 'Home/Page');
Route::inertia('/login', 'Auth/Login')->middleware('guest')->name('login')->middleware('guest');
Route::post('/login', [AuthController::class, 'Login'])->middleware('guest');

Route::get('/logout', [AuthController::class, 'Logout'])->middleware('auth');

Route::post('/sign-up', [AuthController::class, 'SignUp'])->middleware('guest');
Route::inertia('/sign-up', 'Auth/Signup')->middleware('guest')->middleware('guest');

Route::get('/dashboard', [DashboardController::class, 'Index'])->middleware('auth');

Route::get('/download-extension', function(){
	return response()->download(public_path('downloads/Environmint-chrome-0.5.0.zip'));
});