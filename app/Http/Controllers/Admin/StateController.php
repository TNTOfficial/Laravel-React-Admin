<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\State;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StateController extends Controller
{

    public function index()
    {
        $items = State::all();
        return Inertia::render('States/Index', compact('items'));
    }


    public function create()
    {
        return Inertia::render('States/Create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => "required|max:255"
        ]);

        $creationData = [
            "name" => $request->input('name'),
            "status" => $request->input('status')
        ];
        State::create($creationData);
        return redirect()->route('states.index');
    }

    public function show($id)
    {
        $state = State::with('cities')->find($id);
        return Inertia::render('States/StateCities', [
            'state' => $state
        ]);
    }


    public function edit(string $id)
    {
        $state = State::find($id);
        return Inertia::render('States/Edit', [
            'state' => $state
        ]);
    }


    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|max:255'
        ]);
        $state = State::findorFail($id);
        $updateData['name'] = $request->input('name');
        $updateData["status"] = $request->input('status');
        $state->update($updateData);
        return redirect()->route('states.index');
    }


    public function destroy(string $id)
    {
        //
    }
}
