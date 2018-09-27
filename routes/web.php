<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/test',function(){
    return view('template.master');
});

Route::get('/client/client-list/','ClientController@index')->name('clientList');
Route::get('/getProspect','ClientController@getProspect')->name('getProspect');
