<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ImportedItems;

class ImportedItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run()
    {
        $ImportedItemData = [
            [
                'item_name' => 'Laptop',
                'hs_code' => '84713010',
                'origin_country' => 'Japan',
                'quantity' => 100,
                'unit' => 'pcs',
                'arrival_date' => '2025-05-01',
                'inspection_status' => 'not_inspected',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'item_name' => 'Smartphone',
                'hs_code' => '85171200',
                'origin_country' => 'South Korea',
                'quantity' => 500,
                'unit' => 'pcs',
                'arrival_date' => '2025-05-03',
                'inspection_status' => 'inspected',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'item_name' => 'Solar Panel',
                'hs_code' => '85414020',
                'origin_country' => 'China',
                'quantity' => 200,
                'unit' => 'units',
                'arrival_date' => '2025-05-02',
                'inspection_status' => 'cleared',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($ImportedItemData as $ImportedItem) {
            ImportedItems::create($ImportedItem);
        }
    }
}
