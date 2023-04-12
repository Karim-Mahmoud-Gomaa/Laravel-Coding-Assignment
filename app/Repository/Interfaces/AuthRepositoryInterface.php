<?php

namespace App\Repository\Interfaces;
use App\Models\User;
use Illuminate\Http\Request;

interface AuthRepositoryInterface {
    public function login(string $phone,string $password);
    public function register(Request $request);
    public function logout($model);
}