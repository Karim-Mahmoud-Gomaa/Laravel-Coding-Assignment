<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Tests\TestCase;
// use \Illuminate\Database\Eloquent\Factory;
use Illuminate\Http\Response;

class AuthenticationTest extends TestCase
{
    public function testRequiredFieldsForRegistration()
    {
        $this->json('POST', 'api/register', ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
        ->assertJson([ "message" => "The given data was invalid.",
        "errors" => [
            "name" => ["The name field is required."],
            "email" => ["The email field is required."],
            "password" => ["The password field is required."],
            ]
        ]);
    }
    
    public function testRepeatPassword()
    {
        $userData = [
            "name" => "John Doe",
            "email" => "doe@example.com",
            "password" => "demo12345"
        ];
        
        $this->json('POST', 'api/register', $userData, ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
        ->assertJson([ "message" => "The given data was invalid.",
        "errors" => [
            "password" => ["The password confirmation does not match."]
            ]
        ]);
    }
    
    public function testExistsEmail()
    {
        $userData = [
            "name" => "John Doe",
            "email" => "demo@example.com",
            "password" => "demo12345",
            "password_confirmation" => "demo12345"
        ];
        
        $this->json('POST', 'api/register', $userData, ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
        ->assertJson([ "message" => "The given data was invalid.",
        "errors" => [
            "email" => ["The email has already been taken."]
            ]
        ]);
        
    }
    
    public function testSuccessfulRegistration()
    {
        
        $userData = User::factory(1)->make()[0];
        $userData = array_merge($userData->toArray(),[
            "password" => "demo12345",
            "password_confirmation" => "demo12345"
        ]);
        
        $this->json('POST', 'api/register', $userData, ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_OK)
        ->assertJsonStructure([
            "success" => [ "token",
            "user" => [
                'id',
                'name',
                'email',
                'created_at',
                'updated_at',
            ],
            ]
        ]);
    }
    
    public function testWrongEmailForLogin()
    {
        $loginData = ['email' => '2demo@example.com', 'password' => 'password'];
        
        $this->json('POST', 'api/login', $loginData, ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_UNAUTHORIZED)
        ->assertJson([ "error" => "Your Email Or Password is wrong.."]);
    }
    
    public function testSuccessfulLogin()
    {
        $loginData = ['email' => 'demo@example.com', 'password' => 'password'];
        
        $this->json('POST', 'api/login', $loginData, ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_OK)
        ->assertJsonStructure([
            "success" => [ "token",
            "user" => [
                'id',
                'name',
                'email',
                'created_at',
                'updated_at',
            ],
            ]
        ]);
    }
    
    public function testUnauthenticated()
    {
        $this->json('GET', 'api/user',  ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_UNAUTHORIZED)
        ->assertJson([ "message" => "Unauthenticated."]);
    }
    
    public function testAuthenticatedUser()
    {
        $user=User::first();
        $this->actingAs($user, 'api');
        
        $this->json('GET', 'api/user',  ['Accept' => 'application/json'])
        ->assertStatus(Response::HTTP_OK)
        ->assertJsonStructure([
            "success" => [ 
                "user" => [
                    'id',
                    'name',
                    'email',
                    'created_at',
                    'updated_at',
                ],
            ],
        ]);
    }
}
