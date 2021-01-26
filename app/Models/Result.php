<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'survey_results';

    protected $fillable = ['complete_id', 'item_id', 'no', 'value'];

    public function complete() {
        return $this->belongsTo(Complete::class);
    }

    public function items() {
        return $this->belongsTo(Item::class);
    }
}
