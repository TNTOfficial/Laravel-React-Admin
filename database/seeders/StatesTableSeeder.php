<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (DB::table('states')->get()->count() == 0) {

            DB::table('states')->insert(
                array(
                    array('id' => '1', 'name' => 'Andaman and Nicobar Islands', 'status' => '0'),
                    array('id' => '2', 'name' => 'Andhra Pradesh', 'status' => '0'),
                    array('id' => '3', 'name' => 'Arunachal Pradesh', 'status' => '0'),
                    array('id' => '4', 'name' => 'Assam', 'status' => '0'),
                    array('id' => '5', 'name' => 'Bihar', 'status' => '0'),
                    array('id' => '6', 'name' => 'Chandigarh', 'status' => '0'),
                    array('id' => '7', 'name' => 'Chhattisgarh', 'status' => '0'),
                    array('id' => '8', 'name' => 'Dadra and Nagar Haveli', 'status' => '0'),
                    array('id' => '9', 'name' => 'Daman and Diu', 'status' => '0'),
                    array('id' => '10', 'name' => 'Delhi', 'status' => '0'),
                    array('id' => '11', 'name' => 'Goa', 'status' => '0'),
                    array('id' => '12', 'name' => 'Gujarat', 'status' => '0'),
                    array('id' => '13', 'name' => 'Haryana', 'status' => '0'),
                    array('id' => '14', 'name' => 'Himachal Pradesh', 'status' => '0'),
                    array('id' => '15', 'name' => 'Jammu and Kashmir', 'status' => '0'),
                    array('id' => '16', 'name' => 'Jharkhand', 'status' => '0'),
                    array('id' => '17', 'name' => 'Karnataka', 'status' => '0'),
                    array('id' => '18', 'name' => 'Kerala', 'status' => '0'),
                    array('id' => '19', 'name' => 'Lakshadweep', 'status' => '0'),
                    array('id' => '20', 'name' => 'Madhya Pradesh', 'status' => '0'),
                    array('id' => '21', 'name' => 'Maharashtra', 'status' => '0'),
                    array('id' => '22', 'name' => 'Manipur', 'status' => '0'),
                    array('id' => '23', 'name' => 'Meghalaya', 'status' => '0'),
                    array('id' => '24', 'name' => 'Mizoram', 'status' => '0'),
                    array('id' => '25', 'name' => 'Nagaland', 'status' => '0'),
                    array('id' => '26', 'name' => 'Odisha', 'status' => '0'),
                    array('id' => '27', 'name' => 'Pondicherry', 'status' => '0'),
                    array('id' => '28', 'name' => 'Punjab', 'status' => '0'),
                    array('id' => '29', 'name' => 'Rajasthan', 'status' => '0'),
                    array('id' => '30', 'name' => 'Sikkim', 'status' => '0'),
                    array('id' => '31', 'name' => 'Tamil Nadu', 'status' => '0'),
                    array('id' => '32', 'name' => 'Telangana', 'status' => '0'),
                    array('id' => '33', 'name' => 'Tripura', 'status' => '0'),
                    array('id' => '34', 'name' => 'Uttar Pradesh', 'status' => '0'),
                    array('id' => '35', 'name' => 'Uttarakhand', 'status' => '0'),
                    array('id' => '36', 'name' => 'West Bengal', 'status' => '0')
                )
            );
        } else {
            echo "Table is not empty, therefore NOT ";
        }
    }
}
