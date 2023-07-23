<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sponsor extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'name',
        'image',
        'status',
        'order'
    ];
    protected $appends = array('img');

    public function getImgAttribute()
    {
        return $this->image;
    }
}
