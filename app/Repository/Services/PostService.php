<?php

namespace App\Repository\Services;

use \Illuminate\Support\Facades\Facade;
use App\Repository\Interfaces\PostRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Post;

class PostService extends Facade
{
    protected $PostRepository;
    public function __construct(PostRepositoryInterface $PostRepository)
    {
        $this->PostRepository = $PostRepository;
    }
    public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):Post{
        return $this->PostRepository->find($id,$columns,$relations,$appends);
    }
    public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10,array $filter=[]){
        return $this->PostRepository->index($columns,$relations,$appends,$paginate,$filter);
    }
    public function create(Request $request):int{
        return $this->PostRepository->create($request);
    }
    public function update(int $id,Request $request):bool{
        return $this->PostRepository->update($id,$request);
    }
    public function delete(int $id):bool{
        return $this->PostRepository->delete($id);
    }

}