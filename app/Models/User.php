<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $guarded = [];
    protected $hidden = ['password','remember_token'];
    // //////////////////////////////////////////////relationships
    public function posts()
    {
        return $this->hasMany(Post::class,'user_id');
    }
}
