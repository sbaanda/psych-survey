<?php

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

require __DIR__.'/auth.php';


Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    });

    Route::prefix('survey')->middleware(['role:patient'])->group(function () {
        Route::get('{slug}', [\App\Http\Controllers\SurveyController::class, 'show']);
        Route::get('{slug}/start', [\App\Http\Controllers\SurveyController::class, 'start']);
        Route::get('{slug}/get', [\App\Http\Controllers\SurveyController::class, 'getSurvey']);
        Route::post('{slug}/result', [\App\Http\Controllers\SurveyController::class, 'result']);
        Route::post('{slug}/result/remove', [\App\Http\Controllers\SurveyController::class, 'removeResult']);
    });
});

Route::get('/test', function() {
    App\Repositories\SurveyRepository::calculateSurvey(App\Models\Complete::find(3));
});
