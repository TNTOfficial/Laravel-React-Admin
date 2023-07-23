<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['name', 'status'];
    protected $casts = [
        'status' => 'boolean'
    ];

    public function cities()
    {
        return $this->hasMany(City::class);
    }
}
