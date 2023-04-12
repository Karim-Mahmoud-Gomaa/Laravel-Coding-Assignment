<?php

namespace App\Repository\Interfaces;
use App\Models\Post;
use Illuminate\Http\Request;

interface PostRepositoryInterface {
    public function find(int $id,array $columns=['*'],array $relations=[],array $appends=[]):Post;
    public function index(array $columns=['*'],array $relations=[],array $appends=[],int $paginate=10,array $filter=[]);
    public function create(Request $request):int;
    public function update(int $id,Request $request):bool;
    public function delete(int $id):bool;
}