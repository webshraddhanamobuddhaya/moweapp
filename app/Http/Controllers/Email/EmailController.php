<?php

namespace App\Http\Controllers\Email;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mail;

class EmailController extends Controller
{
    public function sendContactUs(Request $request)
    {
        // return $request;
        // $this->validate($request, [
        //     'name' => 'required|max:50',
        //     'subject' => 'required|max:150',
        //     'email' => 'required|email',
        //     'text' => 'required',
        // ]);

        $validator = \Validator::make($request->all(), [
            'name' => 'required|max:50',
            'subject' => 'required|max:150',
            'email' => 'required|email',
            'text' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'message'=>'Something Wrong!',
                'errors'=>$validator->errors()->all()
                ]);
        }else{
            $name = $request->name;
            $subject = $request->subject;
            $email = $request->email;
            $text = $request->text;
            //Send mail
            Mail::send(['text'=>'contact-email'], ['name'=>$name,"subject"=>$subject,'email'=> $email,'text'=> $text], function ($message) use ($subject,$name) {
                $message->to('kumarasiri@gmail.com', 'to backend')
                ->subject($subject);
                $message->from('mobileapp@shraddha.lk', 'Message from: '.$name);
            });
            return response()->json([
                'success'=> true, 
                'message'=>'Message has been Sent!',
                'errors'=> null
                ]);
        }

        
        
        // return response($request->all(), 200)
        //           ->header('Content-Type', 'text/plain');
    }
}
