<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\State;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cities = City::all();
        return Inertia::render('Cities/Index', compact('cities'));
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Cities/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            "name" => "required|max:255"
        ]);

        $creationData = [
            "name" => $request->input('name'),
            "status" => $request->input('status')
        ];

        City::create($creationData);

        return redirect()->route('cities.index');
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }


    public function edit(string $id)
    {
        $city = City::find($id);
        $state = State::find($id);
        return Inertia::render('Cities/Edit', [
            'city' => $city, 'state' => $state
        ]);
    }


    public function update(Request $request, string $id)
    {
        $request->validate([
            "name" => "required|max:255"
        ]);

        $city = City::findOrFail($id);

        $updateData = [
            "name" => $request->input('name'),
            "status" => $request->input('status')
        ];

        $city->update($updateData);
        return redirect()->route('state.cities', ['state'=> $city->state_id]);
    }



    public function destroy(string $id)
    {
        //
    }
}
