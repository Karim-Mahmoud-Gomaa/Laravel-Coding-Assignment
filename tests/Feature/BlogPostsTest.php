<?php

namespace Tests\Feature;

use App\Models\{User,Post};
use Tests\TestCase;
use Illuminate\Http\Response;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;

class BlogPostsTest extends TestCase
{
    public function testRequiredFieldsForCreate()
    {
        $this->withoutMiddleware();
        
        $this->json('POST', 'api/posts', ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
        ->assertJson([ "message" => "The given data was invalid.",
        "errors" => [
            "title" => ["The title field is required."],
            "content" => ["The content field is required."],
            "image" => ["The image field is required."],
            ]
        ]);
    }
    
    public function testImageTypeForCreate()
    {
        $this->withoutMiddleware();
        
        $loginData = ['title' => 'title', 'content' => 'content', 'image' => 'image'];
        
        $this->json('POST', 'api/posts',$loginData, ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
        ->assertJson([ "message" => "The given data was invalid.",
        "errors" => [
            "image" => ["The image must be an image."],
            ]
        ]);
    }
    
    public function testIndexData()
    {
        $user=User::get()->first();
        $this->actingAs($user, 'api');
        
        $response = $this->json('GET', 'api/posts', ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_OK)
        ->assertJsonStructure([ 
            "success"=>[
                "posts"=>[
                    "data"=>[
                        "*" => ["title","content","image"],
                    ],
                ],
            ],
        ]);
        
    }
    
    public function testSuccessfulCreate()
    {
        $user=User::get()->first();
        $this->actingAs($user, 'api');
        
        //Copy Image For Test
        File::copy(public_path("images/test.jpg"), public_path("images/demo.jpg"));
        
        $loginData = [
            'title' => 'Lorem Ipsum available', 
            'content' => "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.", 
            'image' => new UploadedFile(public_path("images/demo.jpg"),'demo.jpg', null, null, true)
        ];
        
        $response = $this->json('POST', 'api/posts',$loginData, ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_OK)->assertJsonStructure([ "success"]);
        
        //Image Exists Check
        $post = Post::find($response->decodeResponseJson()['success']);
        $this->assertFileExists(public_path("assets/images/posts/".$post->image));
    }
    
    public function testSuccessfulDelete()
    {
        $user=User::get()->first();
        $this->actingAs($user, 'api');
        $post=Post::first();
        if ($post) {
            $this->json('Delete', 'api/posts/'.$post->id, ['Accept' => 'application/json'])
            ->assertStatus(Response::HTTP_OK)->assertJsonStructure(["success"]);
        }
    }
    
}
