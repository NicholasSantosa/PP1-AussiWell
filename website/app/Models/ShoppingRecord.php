<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class ShoppingRecord extends Model
{
    use HasFactory;

    public function user() {
		return $this->belongsTo(User::class);
	}

    public function getCreatedAtAttribute($value)
	{
		return \Carbon\Carbon::parse($value)->timezone('Australia/Melbourne')->diffForHumans();
	}
}
