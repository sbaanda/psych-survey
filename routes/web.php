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

    Route::prefix('survey')->middleware(['role:doctor'])->group(function () {
        Route::get('{slug}/patients', [\App\Http\Controllers\SurveyController::class, 'patients']);
        Route::get('{slug}/list', [\App\Http\Controllers\SurveyController::class, 'listPatients']);
        Route::get('{slug}/{user}', [\App\Http\Controllers\SurveyController::class, 'patientResult']);
    });

    Route::prefix('patients')->middleware(['role:doctor'])->group(function () {
        Route::get('', [\App\Http\Controllers\PatientsController::class, 'index']);
        Route::get('list', [\App\Http\Controllers\PatientsController::class, 'list']);
        Route::get('edit/{type}', [\App\Http\Controllers\PatientsController::class, 'edit']);
        Route::get('edit/{type}/{user}', [\App\Http\Controllers\PatientsController::class, 'edit']);
        Route::post('create', [\App\Http\Controllers\PatientsController::class, 'create']);
        Route::put('update/{user}', [\App\Http\Controllers\PatientsController::class, 'update']);
        Route::post('delete', [\App\Http\Controllers\PatientsController::class, 'delete']);
    });
});

Route::get('/test', function() {
    dd(App\Models\User::find(7)->results()->get());
});
