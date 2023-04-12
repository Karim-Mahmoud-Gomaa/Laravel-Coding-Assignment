<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
    * Run the database seeds.
    *
    * @return void
    */
    public function run()
    {
        User::factory(1)->create(['email'=>'demo@example.com']);
        User::factory(1)->create(['email'=>'demo2@example.com']);
    }
}
