<?php

namespace App\Http\Controllers;

use App\Models\Axe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\Foreach_;

class AxeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $axes = Axe::all();
        return $axes;
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

            $data = $request-> all();

            foreach ($data as $item) {

                $axe =new Axe();
                $axe ->servic_id = $item['servic_id'];
                $axe ->titleAxe =$item['titleAxe'];
                $axe ->descriptionAxe =$item['descriptionAxe'];
                $axe->save();
            }
            return response()->json(['message'=> 'axes add avec success','data'=>$data]);

            // foreach ($request->all() as $key => $value) {
            //    Axe::created($request->all());
            // }
            // return response()->json(['message'=> 'axes add avec success','data'=>$request->all()]);





    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $axes = DB::table('axes')->where('servic_id',$id)->get();
        return $axes;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Axe $axe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Axe $axe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $axe=Axe::find($id);

        $axe->delete();
    }
}
