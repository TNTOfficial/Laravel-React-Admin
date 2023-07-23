<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SliderController extends Controller
{

    public function index()
    {

        $items = Slider::orderBy('order')->get();
        $items = $items->map(function ($item, $index) {
            $item['serialNumber'] = $index + 1;
            return $item;
        });
        return Inertia::render('Slider/Index', [
            'items' => $items, "Index"
        ]);
    }

    public function sort(Request $request)
    {
        $items = Slider::orderBy('order')->get();

        return Inertia::render('Slider/Sortable', ['items' => $items]);
    }


    public function updateOrder(Request $request)
    {
        $ids = $request->input('order');
        foreach ($ids as $index => $id) {
            Slider::where('id', $id)->update(['order' => $index + 1]);
        }
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Slider/Create');
    }

    public function store(Request $request)
    {
        $lastRecord = Slider::orderByDesc('order')->first();
        $request->validate([
            "title" => "required|max:255",
            "sub_title" => "required|max:255",
        ]);
        $creationData = $request->only(["title", "sub_title"]);
        $creationData["status"] = $request->input('status');
        if ($request->croppedImage != null) {
            $extension = explode('/', mime_content_type($request->croppedImage))[1];
            $imageName = "slider-" . now()->timestamp . "." . $extension;
            //Image::make(file_get_contents($request->croppedImage))->save($path); 
            Storage::disk('public')->put(
                $imageName,
                file_get_contents($request->croppedImage)
            );
            $creationData["image"] = $imageName;
        }

        if ($lastRecord) {
            $creationData["order"] = $lastRecord->order + 1;
        }
        Slider::create($creationData);
        return redirect()->route('slides.index');
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
        $item = Slider::find($id);
        return Inertia::render('Slider/Edit', [
            'item' => $item
        ]);
    }
    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, string $id)
    {
        $request->validate([
            "title" => "required|max:255",
            "sub_title" => "required|max:255",
        ]);

        $item = Slider::find($id);

        if ($item) {
            $updateData = $request->only(["title", "sub_title"]);
            $updateData["status"] = $request->input('status');

            if ($request->croppedImage != null) {
                $extension = explode('/', mime_content_type($request->croppedImage))[1];
                $imageName = "slider-" . now()->timestamp . "." . $extension;
                Storage::disk('public')->put(
                    $imageName,
                    file_get_contents($request->croppedImage)
                );
                $updateData["image"] = $imageName;
                Storage::disk('public')->delete($item->image);
            }

            $item->update($updateData);
        }
        return redirect()->route('slides.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Slider::find($id);
        if ($item) {
            Storage::disk('public')->delete($item->image);
        }
        $item->delete();
        return redirect()->route('slides.index');
    }
}
