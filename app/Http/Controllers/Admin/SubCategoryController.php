<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(String $id)
    {
        $category = Category::find($id);
        $subCategories = SubCategory::with('category')->where('category_id', $id)->get();
        return Inertia::render('SubCategories/Index', compact('category', 'subCategories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(String $id)
    {
        $category = Category::find($id);
        return Inertia::render('SubCategories/Create', compact('category'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        SubCategory::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'category_id' => $request->category_id,
            'status' => $request->input('status')
        ]);

        return redirect()->route('sub_categories.index', $request->category_id)
            ->with('message', 'SubCategory created successfully.');
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
        $category = Category::find($id);
        $subCategory = SubCategory::find($id);
        return Inertia::render('SubCategories/Edit', compact('subCategory', 'category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $subCategory = SubCategory::find($id);

        $subCategory->name = $request->name;
        $subCategory->slug = Str::slug($request->name);
        $subCategory->status = $request->input('status');
        $subCategory->save();

        return redirect()->route('sub_categories.index', $request->category_id)
            ->with('message', 'SubCategory updated successfully.');
    }


    public function destroy(Request $request, string $id)
    {
        $subCategory = SubCategory::find($id);
        $subCategory->delete();

        return redirect()->back()
            ->with('message', 'SubCategory deleted successfully.');
    }
}
