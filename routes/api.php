<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/videos', 'Video\VideoController@allVideos');
Route::get('/video/{id}', 'Video\VideoController@video');

Route::get('/live_id', 'Video\LiveStreamController@liveID');

Route::post('/submit', 'Email\EmailController@sendContactUs');

