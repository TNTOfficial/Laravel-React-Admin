<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sponsor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SponsorController extends Controller
{

    public function index()
    {
        $items = Sponsor::orderBy('order')->get();
        return Inertia::render('Sponsor/Index', [
            'items' => $items
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Sponsor/Create');
    }

    public function store(Request $request)
    {
        $lastRecord = Sponsor::orderByDesc('order')->first();
        $request->validate([
            "name" => "required|max:255"
        ]);
        $creationData = $request->only(["name"]);
        $creationData["status"] = $request->input('status');
        if ($request->croppedImage != null) {
            $extension = explode('/', mime_content_type($request->croppedImage))[1];
            $imageName = "sponsor-" . now()->timestamp . "." . $extension;
            Storage::disk('public')->put(
                $imageName,
                file_get_contents($request->croppedImage)
            );
            $creationData["image"] = $imageName;
        }

        if ($lastRecord) {
            $creationData["order"] = $lastRecord->order + 1;
        }
        Sponsor::create($creationData);
        return redirect()->route('sponsors.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    public function sort()
    {
        $items = Sponsor::orderBy('order')->get();
        return Inertia::render('Sponsor/Sortable', [
            'items' => $items
        ]);
    }

    public function updateOrder(Request $request)
    {
        $ids = $request->input('order');
        foreach ($ids as $index => $id) {
            Sponsor::where('id', $id)->update(['order' => $index + 1]);
        }
    }

    public function edit(string $id)
    {
        $item = Sponsor::find($id);
        return Inertia::render('Sponsor/Edit', [
            'item' => $item
        ]);
    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            "name" => "required|max:255",
        ]);

        $item = Sponsor::find($id);

        if ($item) {
            $updateData = $request->only(["name"]);
            $updateData["status"] = $request->input('status');

            if ($request->croppedImage != null) {
                $extension = explode('/', mime_content_type($request->croppedImage))[1];
                $imageName = "sponsor-" . now()->timestamp . "." . $extension;
                Storage::disk('public')->put(
                    $imageName,
                    file_get_contents($request->croppedImage)
                );
                $updateData["image"] = $imageName;
                Storage::disk('public')->delete($item->image);
            }

            $item->update($updateData);
        }
        return redirect()->route('sponsors.index');
    }



    public function destroy(string $id)
    {
        $item = Sponsor::find($id);
        if ($item) {
            Storage::disk('public')->delete($item->image);
        }
        $item->delete();
        return redirect()->route('sponsors.index');
    }
}
