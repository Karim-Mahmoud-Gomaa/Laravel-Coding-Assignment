<?php

namespace App\Repository;

use App\Models\User;
use App\Repository\Facades\CompanyFacade;
use App\Repository\Interfaces\AuthRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{DB,Auth};
use Nwidart\Modules\Facades\Module;

class AuthRepository implements AuthRepositoryInterface
{
   // use AuthUserRepository;
   /**
   * @var Model
   */
   protected $model;
   
   /**
   * BaseRepository constructor.
   *
   * @param Model $model
   */
   public function __construct(User $model)
   {
      $this->model = $model;
   }
   
   public function login(string $email,string $password){
      $auth_user = $this->model->where('email',$email)->first();
      if(isset($auth_user)&&Hash::check($password, $auth_user->password)){
         $auth_user->tokens()->delete();
         $tokenResult = $auth_user->createToken('MyApp');
         $success['token'] =  $tokenResult->accessToken;
         $success['user'] =  $auth_user;
         return $success;
      }
      return false;
   }
   
   public function register(Request $request){
      
      $auth_user=$this->model->create([
         'email'=>$request->email,
         'name'=>$request->name,
         'password'=>bcrypt($request->password)
      ]);
      $tokenResult = $auth_user->createToken('MyApp');
      $success['token'] =  $tokenResult->accessToken;
      $success['user'] =  $auth_user;
      return $success;
   }
   
   public function logout($model)
   {
      $model->token()->delete();
      return true;
   }
   
}