<?php

namespace App\Repository\Services;

use \Illuminate\Support\Facades\Facade;
use App\Repository\Interfaces\AuthRepositoryInterface;
use Illuminate\Http\Request;

class AuthService extends Facade
{
    protected $AuthRepository;
    public function __construct(AuthRepositoryInterface $AuthRepository)
    {
        $this->AuthRepository = $AuthRepository;
    }
   
    public function login(string $phone,string $password){
        return $this->AuthRepository->login($phone,$password);
    }
    public function register(Request $request){
        return $this->AuthRepository->register($request);
    }
    public function logout($model){
        return $this->AuthRepository->logout($model);
    }

}