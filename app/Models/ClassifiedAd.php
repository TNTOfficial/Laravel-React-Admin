<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassifiedAd extends Model
{
    use HasFactory;
    protected $fillable = [
        'productname',
        'name',
        'state',
        'city',
        'yearofpurchase',
        'mobile',
        'image',
        'expsellprice',
        'category_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
