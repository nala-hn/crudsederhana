<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateImportedItemRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'item_name' => 'required|string',
            'hs_code' => 'required|string',
            'origin_country' => 'required|string',
            'quantity' => 'required|integer',
            'unit' => 'required|string',
            'arrival_date' => 'required|date',
            'inspection_status' => 'required|in:not_inspected, inspected, cleared',
        ];
    }
}
