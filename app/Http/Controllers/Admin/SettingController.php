<?php

namespace App\Http\Controllers\Admin;

use App\Models\Setting;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{

    public function index()
    {
        $settings = Setting::all();
        return Inertia::render('Setting/Index', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $settings = $request->except('_token', '_method');
        foreach ($settings as $key => $value) {
            switch ($key) {
                case ('logo'):
                    if ($request->croppedImage != null) {
                        $extension = explode('/', mime_content_type($request->croppedImage))[1];
                        $imageName = "logo-" . now()->timestamp . "." . $extension;
                        Storage::disk('public')->put(
                            $imageName,
                            file_get_contents($request->croppedImage)
                        );
                        $setting = Setting::where('key', $key)->first();
                        $setting->value = $imageName;
                        $setting->save();
                    }
                    break;

                case ('fav_icon'):
                    if ($request->croppedImage != null) {
                        $extension = explode('/', mime_content_type($request->croppedImage))[1];
                        $imageName = "favicon-" . now()->timestamp . "." . $extension;
                        Storage::disk('public')->put(
                            $imageName,
                            file_get_contents($request->croppedImage)
                        );
                        $setting = Setting::where('key', $key)->first();
                        $setting->value = $imageName;
                        $setting->save();
                    }
                    break;

                default:
                    $setting = Setting::where('key', $key)->first();
                    if ($setting) {
                        $setting->value = $value ?? '';
                        $setting->save();
                    }
                    break;
            }
        }

        return to_route('settings.index');
    }
}
