<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingTableSeeder extends Seeder
{
    protected $settings = array(
        array('key' => 'about_us_short', 'value' => '', 'status' => '1'),
        array('key' => 'about_us', 'value' => '', 'status' => '1'),
        array('key' => 'logo', 'value' => '', 'status' => '1'),
        array('key' => 'fav_icon', 'value' => '', 'status' => '1'),
        array('key' => 'site_name', 'value' => '', 'status' => '1'),
        array('key' => 'site_title', 'value' => '', 'status' => '1'),
        array('key' => 'admin_email', 'value' => '', 'status' => '1'),
        array('key' => 'foot_copyright_text', 'value' => '', 'status' => '1'),
        array('key' => 'seo_meta_title', 'value' => '', 'status' => '1'),
        array('key' => 'seo_meta_description', 'value' => '', 'status' => '1'),
        array('key' => 'social_facebook', 'value' => '', 'status' => '1'),
        array('key' => 'social_twitter', 'value' => '', 'status' => '1'),
        array('key' => 'social_instagram', 'value' => '', 'status' => '1'),
        array('key' => 'social_linkdin', 'value' => '', 'status' => '1'),
        array('key' => 'google_analytics', 'value' => '', 'status' => '1'),
        array('key' => 'pinterest', 'value' => '', 'status' => '1'),
        array('key' => 'github', 'value' => '', 'status' => '1'),
        array('key' => 'phone1', 'value' => '', 'status' => '1'),
        array('key' => 'phone2', 'value' => '', 'status' => '1'),
        array('key' => 'address', 'value' => '', 'status' => '1'),
        array('key' => 'footer_text', 'value' => '', 'status' => '1'),
        array('key' => 'membership_success_response', 'value' => '', 'status' => '1'),
        array('key' => 'contact_us_success_response', 'value' => '', 'status' => '1')
    );

    public function run()
    {
        $count = 0;
        foreach ($this->settings as $index => $setting) {
            $record = Setting::where('key', $setting['key'])->first();

            if (!$record) {
                $result = Setting::create($setting);
                $count++;
            }
        }
        $this->command->info('Inserted ' . $count . ' records');
    }
}
