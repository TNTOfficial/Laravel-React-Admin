<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'image', 'category_id', 'status'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

}
