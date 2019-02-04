<?php

namespace App\Http\Controllers\Video;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VideoController extends Controller
{
    public function allVideos(){
        // $link = 'latest_videos';
        // $url = "https://www.shraddha.lk/stvapi/public/$link";

        $url = "https://www.shraddha.lk/stvapi/public/latest_videos";

        $client = new \GuzzleHttp\Client();
        $request = $client->get($url);
        $response = $request->getBody();
        $data = json_decode($response);

        // dd($url);

        return $data;


    }

    public function video($id){
        $url = "https://www.shraddha.lk/stvapi/public/postforweb/$id";

        $client = new \GuzzleHttp\Client();
        $request = $client->get($url);
        $response = $request->getBody();
        $data = json_decode($response);

        return $response;

    }

    private function getData(){
        $url = "https://www.shraddha.lk/stvapi/public/latest_videos";

        $client = new \GuzzleHttp\Client();
        $request = $client->get($url);
        $response = $request->getBody();
        $data = json_decode($response);

        // return $data;
        return 123;


    }
}
