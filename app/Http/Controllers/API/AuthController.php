<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\Facades\AuthFacade;
use App\Models\User;
use Nwidart\Modules\Facades\Module;

class AuthController extends Controller
{
    public $successStatus = 200;
    
    public function login(Request $request)
    { 
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);
        $success = AuthFacade::login($request->email,$request->password,$request->code);
        if ($success) {
            return response()->json(['success' => $success], $this->successStatus);
        }
        return response()->json(["error" => "Your Email Or Password is wrong.."], 401);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name'=> 'required|string|max:100',
            'email' => 'required|email|unique:users,email',
            'password'=> 'required|confirmed|string|min:6',
        ]);

        $success=AuthFacade::register($request);
        if ($success) {
            return response()->json(['success' => $success], $this->successStatus);
        }
        return response()->json(["error" => "You have entered an invalid Data"], 401);
    }   

    public function user(Request $request)
    {
        $success['user']=$request->User();
        return response()->json(['success' => $success], 200);
    }

    public function logout(Request $request)
    {
        AuthFacade::logout($request->user());
        return response()->json(['success' => 'done'], 200);
    }
    
}
