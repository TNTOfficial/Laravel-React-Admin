<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\ClassifiedAd;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassifiedAdController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('ClassifiedAds/CreateClassifiedAdPage', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the common fields
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
            // ...
        ]);

        $selectedCategory = $request->input('category_id');

        // Validate and handle category-specific fields
        if ($selectedCategory === 'cars') {
            $validatedData = $request->validate([
                // Car-specific fields
                // ...
            ]);
            // Handle car form submission
            // ...
        } elseif ($selectedCategory === 'electronics') {
            $validatedData = $request->validate([
                // Electronics-specific fields
                // ...
            ]);
            // Handle electronics form submission
            // ...
        }

        // Create the classified ad with validated data
        ClassifiedAd::create($validatedData);

        return redirect()->back()->with('success', 'Classified ad created successfully.');
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
