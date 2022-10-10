<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


use App\Models\ShoppingRecord;
use Illuminate\Support\Facades\Gate;

class DashboardController extends Controller
{
	public function Index(){
		return Inertia::render('Dashboard/Page', ['user' => auth()->user()]);
	}

	public function GetAllShoppingRecords(){
		return ShoppingRecord::where('user_id', '=', auth()->user()->id)->latest()->get();
	}

	public function GetShoppingRecord(Request $request){
		$record = ShoppingRecord::where('id', '=', $request->id)->get()->first();

		if (is_null($record)) {
			abort(404);
		}

		if (Gate::allows('view-shopping-record', $record)) {
			return Inertia::render('Dashboard/ShoppingRecord/Page', ['record' => $record]);
		} else {
			abort(403);
		}
	}

	public function AddShoppingRecord(Request $request){
		$shopping_record = new ShoppingRecord;
		
		$shopping_record->user_id = auth()->user()->id;
		$shopping_record->product_list = json_encode($request->productList);

		$shopping_record->save();
		
		return true;
	}
}
