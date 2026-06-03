<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/diagnosis', function () {
    return Inertia::render('AiDiagnosis');
})->middleware(['auth', 'verified'])->name('diagnosis');

Route::get('/smart-nursery', function () {
    return Inertia::render('SmartNursery');
})->middleware(['auth', 'verified'])->name('smart-nursery');

Route::get('/smart-waste', function () {
    return Inertia::render('SmartWaste');
})->middleware(['auth', 'verified'])->name('smart-waste');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
