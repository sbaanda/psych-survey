<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complete extends Model
{
    use HasFactory;

    protected $table = 'survey_complete';

    protected $fillable = [
        'user_id',
        'survey_id',
        'status',
    ];

    public function survey() {
        return $this->belongsTo(Survey::class);
    }

    public function results() {
        return $this->hasMany(Result::class);
    }
}
