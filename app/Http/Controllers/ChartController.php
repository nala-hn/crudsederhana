<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ImportedItems;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ChartController extends Controller
{
    public function getData()
    {
        $data = ImportedItems::selectRaw('MONTH(arrival_date) as month, COUNT(*) as total')
            ->groupBy('month')
            ->orderBy('month')
            ->get();

        return response()->json($data);
    }

    public function getDataPerHari()
    {
        $data = DB::table('imported_items')
            ->selectRaw('DATE(arrival_date) as date, COUNT(*) as total')
            ->groupBy('date')
            ->get()
            ->map(function ($item) {
                $item->day = Carbon::parse($item->date)->format('l');
                return $item;
            });

        $orderedDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $data = $data->groupBy('day')->map(function ($group) {
            return $group->sum('total');
        });

        $result = collect($orderedDays)->map(function ($day) use ($data) {
            return [
                'day' => $day,
                'total' => $data->get($day, 0)
            ];
        });


        return response()->json($result);
    }
}
