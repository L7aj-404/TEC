<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
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
            $token = $user->createToken($user->email.'_Token')->plainTextToken;
            // User::create($request->post());
            return response()->json([
                "status"=>200,
                "id"=>$user->id,
                "role"=>$user->role,
                "username"=>$user->firstname.'_'.$user->lastname,
                "token" => $token,
                "message" => "Rejistraction success"

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
                    "status"=>200,
                    "id"=>$user->id,
                    "role"=>$user->role,
                    "token" => $user->token,
                    "message" => "login success"

                    ]);

            }else {
                return response()->json([
                    "status"=>401,
                    "message"=>"invalid email or password",


                ]);
            }

    }

    public function restpassword(Request $request){
          $request->validate(['email'=>'required|email|exists:users,email']);
          $response = Password::sendResetLink(
            $request->only('email')
          );

          return  $response == Password::RESET_LINK_SENT
          ?response()->json(['message' => 'Reset link sent successfully'],200)
          :response()->json(['error' => 'Unaoble to send reset link'],422);

    }
    public function Verifypassword(Request $request){
        //   $request->validate(['email'=>'required|email|exists:users,email']);
        //   $response = Password::sendResetLink(
        //     $request->only('email')
        //   );

        //   return  $response == Password::RESET_LINK_SENT
        //   ?response()->json(['message' => 'Reset link sent successfully'],200)
        //   :response()->json(['error' => 'Unaoble to send reset link'],422);

    }
    public function info($id){
          $user = User::find($id);
          return  response()->json([
                    "firstname"=>$user->firstname,
                    "lastname"=>$user->lastname,
                    "age"=>$user->age,
                    "email"=>$user->email,
          ]);

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
