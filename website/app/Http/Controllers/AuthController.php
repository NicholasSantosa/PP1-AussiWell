<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct(){
		$this->middleware('guest', ['except' => ['Logout']]);
	}

	public function Login(Request $request){
		$credentials = $request->only('email', 'password');

		if (Auth::attempt($credentials)) {
			return redirect()->intended('/dashboard');
		}

		return redirect()->back();
	}

	public function Logout(){
		Auth::logout();
		return redirect('/');
	}

    public function SignUp(Request $request){
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;

        $user = new \App\Models\User;

        $user->name = $name;
        $user->email = $email;
        $user->password =  Hash::make($password);

        $user->save();
        Auth::login($user);
        return redirect('/dashboard');
    }
}
