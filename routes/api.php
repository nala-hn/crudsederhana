<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImportedItemsController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/imported-items', [ImportedItemsController::class, 'index']);
    Route::post('/imported-items', [ImportedItemsController::class, 'store']);
    Route::get('/imported-items/{id}', [ImportedItemsController::class, 'show']);
    Route::put('/imported-items/{id}', [ImportedItemsController::class, 'update']);
    Route::delete('/imported-items/{id}', [ImportedItemsController::class, 'destroy']);
});