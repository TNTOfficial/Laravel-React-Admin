<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Storage;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialController extends Controller
{

    public function index()
    {
        $items = Testimonial::orderBy('order')->get();
        return Inertia::render('Testimonial/Index', [
            'items' => $items
        ]);
    }


    public function create()
    {
        return Inertia::render('Testimonial/Create');
    }

    public function store(Request $request)
    {
        $lastRecord = Testimonial::orderByDesc('order')->first();
        $request->validate([
            "name" => "required|max:255",
            "designation" => "required|max:255",
            "message" => "required|min:20",
        ]);
        $creationData = $request->only(["name", "designation", "message",]);
        $creationData["status"] = $request->input('status');
        if ($request->croppedImage != null) {
            $extension = explode('/', mime_content_type($request->croppedImage))[1];
            $imageName = "testimonial-" . now()->timestamp . "." . $extension;
            Storage::disk('public')->put(
                $imageName,
                file_get_contents($request->croppedImage)
            );
            $creationData["image"] = $imageName;
        }
        if ($lastRecord) {
            $creationData["order"] = $lastRecord->order + 1;
        }
        Testimonial::create($creationData);
        return redirect()->route('testimonials.index');
    }



    public function show(string $id)
    {
        //
    }


    public function sort()
    {
        $items = Testimonial::orderBy('order')->get();
        return Inertia::render('Testimonial/Sortable', [
            'items' => $items
        ]);
    }

    public function updateOrder(Request $request)
    {
        $ids = $request->input('order');
        foreach ($ids as $index => $id) {
            Testimonial::where('id', $id)->update(['order' => $index + 1]);
        }
    }

    public function edit(string $id)
    {
        $item = Testimonial::find($id);
        return Inertia::render('Testimonial/Edit', [
            'item' => $item
        ]);
    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            "name" => "required|max:255",
            "designation" => "required|max:255",
            "message" => "required|min:20",
        ]);

        $item = Testimonial::find($id);

        if ($item) {
            $updateData = $request->only(["name", "designation", "message"]);
            $updateData["status"] = $request->input('status');

            if ($request->croppedImage != null) {
                $extension = explode('/', mime_content_type($request->croppedImage))[1];
                $imageName = "testimonial-" . now()->timestamp . "." . $extension;
                Storage::disk('public')->put(
                    $imageName,
                    file_get_contents($request->croppedImage)
                );
                $updateData["image"] = $imageName;
                Storage::disk('public')->delete($item->image);
            }

            $item->update($updateData);
        }
        return redirect()->route('testimonials.index');
    }



    public function destroy(string $id)
    {
        $item = Testimonial::find($id);
        if ($item) {
            Storage::disk('public')->delete($item->image);
        }
        $item->delete();
        return redirect()->route('testimonials.index');
    }
}
