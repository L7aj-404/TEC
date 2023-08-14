<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::all();
        return $services;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request -> validate([
                'title'=> 'required',
                'description'=> 'required|min:10',
                'image' => 'required|image|mimes:jpeg,png,jpg,svg|max:2048'

            ]);

            $image = $request->file('image');

            $imageName=Str::random(32).".".$image->getClientOriginalExtension();

            Storage::disk('public')->put($imageName, file_get_contents($image));


            $service =new Service();
            $service ->title =$request->title;
            $service ->description =$request->description;
            $service->image=$imageName;
            $service->save();

        } catch (\Throwable $th) {
            throw $th;

        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $service=Service::find($id);
        DB::table('axes')->where('servic_id',$id)->delete();
        $service->delete();
    }
}
