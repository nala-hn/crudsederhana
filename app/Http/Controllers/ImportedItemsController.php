<?php

namespace App\Http\Controllers;

use App\Models\ImportedItems;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\UpdateImportedItemRequest;

class ImportedItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = ImportedItems::all();
        $user = Auth::user();
        return Inertia::render('Management/ImportedItem', ['user'=>$user, 'items' => $items]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        return Inertia::render('Management/CreateItem', ['user' => $user]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'item_name' => 'required|string',
            'hs_code' => 'required|string',
            'origin_country' => 'required|string',
            'quantity' => 'required|integer',
            'unit' => 'required|string',
            'arrival_date' => 'required|date',
            'inspection_status' => 'required|in:not_inspected, inspected, cleared',
        ]);

        ImportedItems::create($data);

        return redirect()->route('items.index')->with('success', 'Item added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(ImportedItems $importedItems)
    {
        return $importedItems;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $items = ImportedItems::find($id);

        return Inertia::render('Management/EditItem', [
            'item' => $items
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateImportedItemRequest $request, $id)
    {
        $items = ImportedItems::findOrFail($id);
        $items->update($request->validated());

        return redirect()->route('items.index')->with('success', 'Item updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ImportedItems $importedItems, $id)
    {
        $importedItems = ImportedItems::findOrFail($id);
        $importedItems->delete();

        return redirect()->route('items.index')->with('success', 'item successfully deleted');
    }
}
