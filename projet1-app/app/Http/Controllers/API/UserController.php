<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
class UserController extends Controller
{
public function index (Request $request)
{
$users = User::select('id','name','email','role_as','password')->get();
return response()->json([
'status'=> 200,
'users'=>$users,
]);
}

    
public function destroy($id)

    {
   
    
    $users = User::find($id);

    if (!$users) {
        return response()->json([
            'message'=>'User not fond.'
        ],404);

    }
   
    $users->delete();

    return response()->json([
        
        'message'=>'user delete successflly',
        ],200);
  
    
}
public function edit($id)

    {
   
    
    $users = User::find($id);

    if ($users) {
        return response()->json([
            'status'=>200,
            'users'=>$users
        ],200);

    }else{
        return response()->json([
            'status'=>404,
        
            'message'=>'user not fond',
            ],404);
    }
   
   

    
  
    
}




}