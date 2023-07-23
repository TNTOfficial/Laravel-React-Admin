<?php

namespace App\Http\Controllers;

use App\Models\UserProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserProfileController extends Controller
{

    public function show()
    {
        $user = auth()->user();
        $userProfile = $user->profile;
        return Inertia::render('Users/UserProfile', compact('user', 'userProfile'));
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->save();

        $userProfile = $user->userProfile;

        if (!$userProfile) {
            $userProfile = new UserProfile();
            $userProfile->user_id = $user->id;
        }

        $name = $request->input('name');
        $email = $request->input('email');
        $address = $request->input('address');
        $phone = $request->input('phone');

        if (
            $userProfile->name !== $name ||
            $userProfile->email !== $email ||
            $userProfile->address !== $address ||
            $userProfile->phone !== $phone
        ) {

            $existingUserProfile = UserProfile::where('user_id', $user->id)->first();

            if ($existingUserProfile) {
                $existingUserProfile->name = $name;
                $existingUserProfile->email = $email;
                $existingUserProfile->address = $address;
                $existingUserProfile->phone = $phone;

                if ($request->filled('croppedImage')) {
                    $extension = explode('/', mime_content_type($request->croppedImage))[1];
                    $imageName = "UserProfile-" . now()->timestamp . "." . $extension;
                    Storage::disk('public')->put(
                        'images/' . $imageName,
                        file_get_contents($request->croppedImage)
                    );
                    $existingUserProfile["image"] = $imageName;
                }

                $existingUserProfile->save();
            } else {
                $userProfile->name = $name;
                $userProfile->email = $email;
                $userProfile->address = $address;
                $userProfile->phone = $phone;

                if ($request->filled('croppedImage')) {
                    $extension = explode('/', mime_content_type($request->croppedImage))[1];
                    $imageName = "UserProfile-" . now()->timestamp . "." . $extension;
                    Storage::disk('public')->put(
                        'images/' . $imageName,
                        file_get_contents($request->croppedImage)
                    );
                    $userProfile["image"] = $imageName;
                }
                $userProfile->save();
            }
        }

        return redirect()->route('user_profile.show')->with('status', 'Profile information updated successfully');
    }
}
