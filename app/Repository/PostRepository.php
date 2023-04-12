<?php

namespace App\Repository;

use App\Models\Post;
use App\Repository\Interfaces\PostRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostRepository implements PostRepositoryInterface
{
    /**
    * @var Model
    */
    protected $model;
    
    /**
    * BaseRepository constructor.
    *
    * @param Model $model
    */
    public function __construct(Post $model)
    {
        $this->model = $model;
    }
    public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):Post{
        return $this->model->select($columns)->with($relations)->find($id)->append($appends);
    }
    
    public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10,array $filter=[]){
        $data= $this->model->select($columns)->with($relations)
        ->when(isset($filter['search']),function($q) use($filter){
            $q->where('title','like','%'.$filter['search'].'%');
        })->paginate($paginate);
        
        if($appends){foreach ($data as $value) {$value->append($appends);}}
        return $data;
    }
    public function create(Request $request):int{
        DB::beginTransaction();
        $name=time().rand(1111,9999);
        $fullName = $name.'.'.$request->image->getClientOriginalExtension();
        $request->image->move(public_path("assets/images/posts"), $fullName);
        
        $model=$this->model->create([
            'title'=>$request->title,
            'content'=>$request->content,
            'user_id'=>$request->user()->id,
            'image'=>$fullName,
        ]);
        DB::commit();
        return $model->id; 
    }
    public function update(int $id,Request $request):bool{
        $model=$this->model->find($id);
        $model->update([
            'title'=>$request->title,
            'content'=>$request->content,
        ]);
        if ($request->image) {
            DB::beginTransaction();
            $name=time().rand(1111,9999);
            $fullName = $name.'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path("assets/images/posts"), $fullName);
            $path='assets/images/posts/'.$model->image;
            if(File::exists(public_path($path))){
                File::delete(public_path($path));
            }
            $model->update(['image'=>$fullName]);
            DB::commit();
        }
        return true; 
    }
    
    public function delete(int $id):bool{
        DB::beginTransaction();
        $model=$this->model->find($id);
        $path='assets/images/posts/'.$model->image;
        if(File::exists(public_path($path))){
            File::delete(public_path($path));
        }
        $model->delete();
        DB::commit();
        return true;
    }
    
}