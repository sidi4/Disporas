<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Request;
use App\Models\UserMauritani;

class UsermauritaniController extends Controller
{
public function index (Request $request)
{
// $users =UserMauritani::select('nom', 'prenom','num_passport','NNI','email','image','sex','Adresse','enfant','pays_residence','le_travil','num_telphon','type_identite');
$users = UserMauritani::all();
//  $users = UserMauritani::query()->orderByDesc("id")->paginate(5);
//  $users =UserMauritani::paginate(10);
return response()->json([
'status'=> 200,
'users'=>$users,
]);
}

public function store(Request $request)
    {
        // $request->validate([
        //     'nom'=>'required',
        //     'prenom'=>'required',
        //     'num_passport'=>'required',
        //     'NNI'=>'required||min:10',
        //     'email'=>'required',
        //     'image'=>'required',
        //     'sex'=>'required',
        //     'Adresse'=>'required',
        //     'enfant'=>'required',
        //     'pays_residence'=>'required',
        //     'le_travil'=>'required',
        //     'num_telphon'=>'required',
        //     'type_identite'=>'required',
        // ]);

        

        //     // $imageName = Str::random().'.'.$request->image->getClientOriginalExtensions();
        //     $imageName = time() . '.' . $request->image->extension();
            

        //     Storage::disk('public')->putFileAs('dispora/image',$request->image, $imageName);

        //     UserMauritani::create($request->post()+['image'=> $request->image]);
        //     return response()->json([
        //         'message'=>'Dispora Ajouter'
        //     ]);
       
            
            
        try{

        $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();

            UserMauritani::create([
                'nom'=> $request->nom,
                'prenom'=>$request->prenom,
                'num_passport'=>$request->num_passport,
                'NNI'=>$request->NNI,
                'email'=>$request->email,
                'image'=>$imageName,
                'sex'=>$request->sex,
                'Adresse'=>$request->Adresse,
                'enfant'=>$request->enfant,
                'pays_residence'=>$request->pays_residence,
                'le_travil'=>$request->le_travil,
                'num_telphon'=>$request->num_telphon,
                'type_identite'=>$request->type_identite,
            ]);
            Storage::disk('public')->put($imageName,file_get_contents($request->image));

            
            return response()->json([
                'message'=>"Dispora ajouter"
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'message'=>"Dispora non ajouter"
            ],500);

        }
    }

    public function update(Request $request,$id)
    {

        try{

           $user = UserMauritani::find($id);
           if (!$user) {
            return $user()-json([
                'message'=>'User not Fond.'
            ],404);
           }
            $user->nom=$request->nom;
            $user->prenom=$request->prenom;
            $user->num_passport=$request->num_passport;
            $user->NNI=$request->NNI;
            $user->email=$request->email;
            $user->sex=$request->sex;
            $user->Adresse=$request->Adresse;
            $user->enfant=$request->enfant;
            $user->pays_residence=$request->pays_residence;
            $user->le_travil=$request->le_travil;
            $user->num_telphon=$request->num_telphon;
            $user->type_identite=$request->type_identite;

            if ($request->image) {

                $storage = Storage::disk('public');

                if ($storage->exists($user->image)) 
                    $storage->delete($user->image);
                

             $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
             $user->image = $imageName;

             $storage->put($imageName,file_get_contents($request->image));
                
            }
            $user->save();
            
            return response()->json([
                'message'=>"Dispora modifier "
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'message'=>"Dispora non modifer"
            ],500);

        }
    }

    public function destroy($id)

    {
   
    
    $user = UserMauritani::find($id);

    if (!$user) {
        return response()->json([
            'message'=>'User not fond.'
        ],404);

    }
    // public storage
    $storage = Storage::disk('public');

    // Imag delete
    if ($storage->exists($user->image)) 
         $storage->delete($user->image);
                
   
    $user->delete();

    return response()->json([
        
        'message'=>'Dispora delete successflly',
        ],200);
  
    
}
public function edit($id)

    {
   
    
    $users = Usermauritani::find($id);

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
