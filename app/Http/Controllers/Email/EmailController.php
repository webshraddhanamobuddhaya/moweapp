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
        $this->validate($request, [
            'name' => 'required|max:50',
            'subject' => 'required|max:150',
            'email' => 'required|email',
            'text' => 'required',
        ]);

        
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
        
        return response($request->all(), 200)
                  ->header('Content-Type', 'text/plain');
    }
}
