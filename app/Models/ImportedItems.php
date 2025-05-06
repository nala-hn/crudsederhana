<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImportedItems extends Model
{
    protected $fillable = [
        'item_name',
        'hs_code',
        'origin_country',
        'quantity',
        'unit',
        'arrival_date',
        'inspection_status',
    ];    
}
