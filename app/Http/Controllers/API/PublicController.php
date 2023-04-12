<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public $successStatus = 200;

    public function home(Request $request)
    { 
        $success['suppliers']=10;
        $success['clients']=10;
        $success['materials']=01;
        $success['products']=10;
        $success['supplier_orders']=11;
        $success['client_orders']=111;

        return response()->json(['success' => $success], $this->successStatus);
    }
}
