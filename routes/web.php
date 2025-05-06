<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ImportedItemsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ChartController;

Route::get('/', function () {
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/users', [UserController::class,'loadUsers'])->name('users.index');
Route::get('/edit/user/{user_id}', [UserController::class,'loadEditForm'])->name('users.edit');
Route::patch('/edit/user/{user_id}', [UserController::class,'update'])->name('users.update');
Route::get('/delete/user/{user_id}', [UserController::class,'deleteUser'])->name('users.delete');

Route::get('/imported-items', [ImportedItemsController::class, 'index'])->name('items.index');
Route::get('/edit/item/{item_id}', [ImportedItemsController::class, 'loadEditItem'])->name('items.edit');
Route::patch('/edit/item/{item_id}', [ImportedItemsController::class, 'update'])->name('items.update');
Route::get('/delete/item/{item_id}', [ImportedItemsController::class, 'delete'])->name('items.delete');
Route::patch('/imported-items', [ImportedItemsController::class, 'update'])->name('items.updateWithoutId');
Route::get('/items/add', [ImportedItemsController::class, 'create'])->name('items.create');
Route::post('/items/add', [ImportedItemsController::class, 'store'])->name('items.store');
Route::delete('/items/{item_id}', [ImportedItemsController::class, 'destroy'])->name('items.destroy');

Route::get('/chart-data', [ChartController::class, 'getData']);
Route::get('/chart-data-perhari', [ChartController::class, 'getDataPerHari']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
