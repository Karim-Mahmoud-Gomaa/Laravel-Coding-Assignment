<?php

namespace App\Repository\Facades;
use \Illuminate\Support\Facades\Facade;
class AuthFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'App\Repository\Services\AuthService';
    }
}