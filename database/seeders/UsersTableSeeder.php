<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        if (User::get()->count() == 0) {
            User::create(array('name' => 'Administrator', 'email' => 'admin@topntech.com', 'email_verified_at' => Carbon::now(), 'password' => Hash::make('root1234'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()));

            $adminRole = Role::create(['name' => 'Admin']);
            $permission = Permission::create(['name' => 'Post access']);
            $permission = Permission::create(['name' => 'Post edit']);
            $permission = Permission::create(['name' => 'Post create']);
            $permission = Permission::create(['name' => 'Post delete']);

            $permission = Permission::create(['name' => 'Role access']);
            $permission = Permission::create(['name' => 'Role edit']);
            $permission = Permission::create(['name' => 'Role create']);
            $permission = Permission::create(['name' => 'Role delete']);

            $permission = Permission::create(['name' => 'User access']);
            $permission = Permission::create(['name' => 'User edit']);
            $permission = Permission::create(['name' => 'User create']);
            $permission = Permission::create(['name' => 'User delete']);

            $permission = Permission::create(['name' => 'Permission access']);
            $permission = Permission::create(['name' => 'Permission edit']);
            $permission = Permission::create(['name' => 'Permission create']);
            $permission = Permission::create(['name' => 'Permission delete']);
            $adminRole->syncPermissions(Permission::all());
            $user = User::first();
            $user->assignRole($adminRole);
        } else {
            echo "Table is not empty";
        }
    }
}
