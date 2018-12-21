<?php

namespace App\Http\Controllers\Video;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LiveStreamController extends Controller
{
    public function liveID(){

        // return "ok";
        $url = "https://www.shraddha.lk/stvapi/public/live_id";

        $client = new \GuzzleHttp\Client();
        $request = $client->get($url);
        $response = $request->getBody();
        $data = json_decode($response);

        // dd($url);

        return $response;

    }
}
