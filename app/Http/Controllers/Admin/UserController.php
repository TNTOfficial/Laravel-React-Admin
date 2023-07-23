<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;


class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        $users = $users->map(function ($user, $index) {
            $user['serialNumber'] = $index + 1;
            return $user;
        });
        return Inertia::render('Users/Index', [
            'users' => $users, 'Index'
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        User::create($validatedData);

        return redirect()->route('users.index');
    }

    public function show(User $user)
    {
        return Inertia::render('Users/Show', [
            'user' => $user,
        ]);
    }


    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => $user,
        ]);
    }
    public function userRoles($id)
    {
        $user = User::with('roles')->findOrFail($id);
        $roles = Role::all();

        return Inertia::render('Users/Roles', ['roles' => $roles, 'id' => $id, 'user' => $user]);
    }

    public function saveRole(Request $request)
    {

        $user = User::findOrFail($request->input('user_id'));
        $selectedRoles = $request->input('roles') ?? [];

        $existingRoles = $user->roles->pluck('id')->toArray();

        $rolesToRemove = array_diff($existingRoles, $selectedRoles);
        foreach ($rolesToRemove as $roleId) {
            $role = Role::findOrFail($roleId);
            $user->removeRole($role);
        }

        foreach ($selectedRoles as $roleId) {
            $role = Role::findOrFail($roleId);
            if (!$user->hasRole($role)) {
                $user->assignRole($role);
            }
        }

        return redirect()->route('users.roles', $user->id);
    }


    public function update(Request $request, User $user)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user)],
            'password' => ['nullable', 'string', 'min:8'],
        ]);

        $user->update($validatedData);

        return redirect()->route('users.index');
    }

    public function destroy(String $id)
    {
        $user = User::find($id);
        if ($user) {
            $user->delete();
            return to_route('users.index');
        }
    }
}
