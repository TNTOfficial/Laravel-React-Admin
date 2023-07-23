<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Testimonial extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'name',
        'designation',
        'message',
        'image',
        'status',
        'order'
    ];
    protected $appends = array('img', 'shortMsg');

    public function getImgAttribute()
    {
        return $this->image;
    }
    public function getShortMsgAttribute()
    {
        return Str::limit($this->message, 15, '...');
    }
}
