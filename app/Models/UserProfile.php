<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    use HasFactory;
    protected $primaryKey = 'user_id';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'phone',
        'email',
        'image',
        'address',
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $appends = array('img');

    public function getImgAttribute()
    {
        return $this->image;
    }
}
