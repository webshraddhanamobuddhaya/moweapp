<?php

namespace App\Http\Controllers\Message;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
    public function sendMessage(Request $request){

        // return $request->all();

        // Setup the validator
        $rules = array(
            'name' => 'required|max:25',
            'email' => 'required|email',
            'subject' => 'required|max:100',
            'message' => 'required'
        );
        $validator = Validator::make($request->all(), $rules);

        // Validate the input and return correct response
        if ($validator->fails()) {
            return response()->json(array(
                'success' => false,
                'errors' => $validator->getMessageBag()->toArray()

            ), 200); // 400 being the HTTP code for an invalid request.
        }else{

            return response()->json(array('success' => true), 200);
        }

    }

    public function getRequestMessage(){
        return "plese send post request insted of get";
    }
}
