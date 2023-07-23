<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{


    public function index()
    {
        $roles = Role::with('permissions')->get();

        return Inertia::render('Roles/Index', [
            'roles' => $roles,
        ]);
    }


    public function create()
    {
        $permissions = Permission::all();

        return inertia('Roles/Create', [
            'permissions' => $permissions,
        ]);
    }

    public function store(Request $request)
    {
        $role = Role::create(['name' => $request->name]);

        $permissions = Permission::whereIn('id', $request->input('permissions', []))->get();
        $role->syncPermissions($permissions);

        return redirect()->route('roles.index')->with('success', 'Role created successfully.');
    }


    public function edit(Role $role)
    {
        $role = Role::with('permissions')->find($role->id);
        $permissions = Permission::with('roles')->get();
        return Inertia::render('Roles/Edit', compact('role', 'permissions'));
    }



    public function update(Request $request, Role $role)
    {
        $role->name = $request->name;
        $role->save();

        $permissions = Permission::whereIn('id', $request->input('permissions', []))->get();
        $role->syncPermissions($permissions);

        return redirect()->route('roles.index')->with('success', 'Role updated successfully.');
    }


    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()->route('roles.index')->with('success', 'Role deleted successfully.');
    }

  
    public function assignRole(Request $request, User $user)
    {
        $role = Role::find($request->role_id);

        if ($role) {
            $user->assignRole($role);
            return redirect()->route('roles.index')->with('success', 'Role assigned successfully.');
        }

        return redirect()->back()->with('error', 'Role not found.');
    }

    /**
     * Remove a role from a user.
     */

    public function removeRole(Request $request, User $user)
    {
        $role = Role::find($request->role_id);

        if ($role) {
            $user->removeRole($role);
            return redirect()->route('roles.index')->with('success', 'Role removed successfully.');
        }

        return redirect()->back()->with('error', 'Role not found.');
    }
}
