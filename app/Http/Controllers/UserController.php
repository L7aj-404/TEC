<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use PhpParser\Node\Expr\Cast\String_;
use PhpParser\Node\Stmt\TryCatch;

class UserController extends Controller
{
    public function signup(Request $request){
        $request -> validate([
            'firstname'=> 'required',
            'lastname'=> 'required',
            'age'=> 'required',
            'email' => 'required|unique:users',
            'password' => 'required|min:6'
        ]);
try {
    $user =new User();
            $user ->firstname =$request->firstname;
            $user ->lastname =$request->lastname;
            $user ->age =$request->age;
            $user ->email =$request->email;
            $user ->password =Hash::make($request->password) ;
            $user->save();
            // User::create($request->post());
            return response()->json([
                "mesg"=>"signup done",
                "data"=>$user

            ]);

} catch (\Throwable $th) {
    throw $th;

}



    }

    public function login(Request $request){

            $request -> validate([
                'email' => 'required',
                'password' => 'required'
            ]);
            $credentials =$request->only('email','password');
            if (Auth::attempt($credentials)) {
                $user = Auth::getUser();
                return response()->json([
                        "message"=>"signup done",200,
                        "data"=>$user

                    ]);

            }else {
                return response()->json([
                    "message"=>"invalid email or password",401,
                    "data"=>null

                ]);
            }

    }

    public function restpassword(Request $request){
          $request->validate(['email'=>'required|email']);
          $response = Password::sendResetLink(
            $request->only('email')
          );

          return  $response == Password::RESET_LINK_SENT
          ?response()->json(['message' => 'Reset link sent successfully'],200)
          :response()->json(['error' => 'Unaoble to send reset link'],422);

    }
    public function info($id){
          $user = User::find($id);
          return  $user;

    }
    public function users(){
          $users = User::all();
          return  $users;

    }
    public function deleteUser($id){
          $user = User::find($id);
          $user->delete();


    }
    public function conteUser(){
          $conteuser = DB::table('users')->count();
          return $conteuser;


    }

}
