<?php

namespace App\Http\Controllers\NewsFeed;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewsFeedController extends Controller
{
    public function getNewsFeed()
    {

        $url = "https://www.shraddha.lk/stvapi/public/updates/news";

        $client = new \GuzzleHttp\Client();
        $request = $client->get($url);
        $response = $request->getBody();
        $data = json_decode($response);

        // dd($url);

        // return $data;

        return response()->json($data);

    }
}
