<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $abouts = About::all();
        return $abouts;
    }

   
    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        try {
            $request -> validate([
                'title'=> 'required',
                'description'=> 'required|min:10',


            ]);




            $abouts =new About();
            $abouts ->title =$request->title;
            $abouts ->description =$request->description;
            $abouts->save();

        } catch (\Throwable $th) {
            throw $th;

        }
    }
}
