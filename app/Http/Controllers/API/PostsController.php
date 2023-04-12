<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Repository\Facades\PostFacade as Post;
use App\Models\Post as PostModel;

class PostsController extends Controller
{
    private $successStatus = 200;
    
    public function index(Request $request)
    {
        $filter=$request->filter?$request->filter:[];
        $success['posts']=Post::index(['*'],['user'],[],10,$filter);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required|max:100',
            'content'=>'required|string|min:1',
            'image'=>'required|image',
        ]);
        // dd(public_path("assets/images/posts"));
        $success=Post::create($request);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function show (Request $request,PostModel $post)
    {
        $success['post']=Post::find($post->id,['*'],['user'],[]);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function update(Request $request,PostModel $post)
    {
        $request->validate([
            'title'=>'required|max:100',
            'content'=>'required|string|min:1',
            'image'=>'nullable|image',
        ]);
        $success=Post::update($post->id,$request);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function destroy(PostModel $post)
    {
        $success=Post::delete($post->id);
        return response()->json(['success' => $success], $this->successStatus);
    }
   
}
