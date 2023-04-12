<?php

namespace App\Repository;

use App\Models\User;
use App\Repository\Facades\CompanyFacade;
use App\Repository\Interfaces\UserRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{DB,Auth};
use Nwidart\Modules\Facades\Module;

class UserRepository implements UserRepositoryInterface
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
   public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):User{
      return $this->model->select($columns)->with($relations)->find($id)->append($appends);
   }
   
   public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10,array $filter=[]){
      $data= $this->model->select($columns)->with($relations)
      ->when(isset($filter['role']),function($q) use($filter){
         $q->where('role',$filter['role']);
      });
      
      if($paginate>0){$data=$data->paginate($paginate);}else{$data=$data->get();}
      if($appends){foreach ($data as $value) {$value->append($appends);}}
      return $data;
   }
   public function create(Request $request):int{
      $model=$this->model->create(['name'=>$request->name,'phone'=>$request->phone,
      'role'=>$request->role,
      'password'=>bcrypt(($request->password)?$request->password:$request->phone)]);
      return $model->id; 
   }
   public function update(int $id,Request $request):bool{
      if ($request->user()->role=='admin'||$request->user()->id==$id) {
         $model=$this->model->find($id);
         $model->update([
            'name'=>($request->name)?$request->name:$model->name,
            'phone'=>($request->phone)?$request->phone:$model->phone,
            'role'=>($request->user()->role=='admin'&&$request->role)?$request->role:$model->role,
         ]);
         if ($request->password) {
            $model->update(['password'=>bcrypt($request->password)]);
         }
         if ($request->device_id) {
            if ($model->device_id&&$model->device_id!=$request->device_id) {
               // Notification::userLogOut($model->device_id);
            }
            $model->update(['device_id'=>$request->device_id]);
         }
         return true; 
      }
      return false; 
   }
   
   public function joinTeam(int $id,?int $team_id=null):bool{
      return $this->model->find($id)->update(['team_id'=>$team_id]);
   }
   
   public function login(string $phone,string $password){
      $auth_user = $this->model->where('phone',$phone)->first();
      if(isset($auth_user)&&Hash::check($password, $auth_user->password)){
         $auth_user->tokens()->delete();
         $tokenResult = $auth_user->createToken('MyApp');
         $success['token'] =  $tokenResult->accessToken;
         $success['user'] =  $auth_user;
         
         $POSModule = Module::find('POS');
         if ($POSModule) {
            $success['cart']= [];
            // $success['cart']= \Modules\POS\Repository\Facades\OrderFacade::
            // getCart($auth_user->id,['*'],['details.product_price.product']);
         }
         return $success;
      }
      return false;
   }
   public function  logout($model)
   {
      $model->token()->delete();
      return true;
   }
   
   public function delete(int $id):bool{
      
      $model=$this->model->find($id);
      return ($model->delete())?true:false;
   }
   
}