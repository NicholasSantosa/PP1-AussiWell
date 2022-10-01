<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function Index(){
		return Inertia::render('Dashboard/Page', ['user' => auth()->user()]);
    }
}
