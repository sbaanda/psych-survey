<?php

use App\Http\Controllers\SurveyController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('survey')->group(function () {
    Route::get('{survey_slug}', [SurveyController::class, 'show']);
    Route::get('{survey_slug}/start', [SurveyController::class, 'start']);
    Route::get('{survey_slug}/get', [SurveyController::class, 'getSurvey']);
});
