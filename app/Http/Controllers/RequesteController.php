<?php

namespace App\Http\Controllers;

use App\Models\Requeste;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Nette\Utils\Strings;

class RequesteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $requestes = Requeste::all();
        return $requestes;
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Requeste $requeste)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Requeste $requeste)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Requeste $requeste)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        $requeste =Requeste::find($id);
        $requeste->delete();
    }

    public function conteRequeste(){
        $cont = DB::table('requestes')->count();
        return $cont;


  }
}
