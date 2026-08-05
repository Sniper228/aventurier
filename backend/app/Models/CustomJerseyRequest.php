<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'user_id',
    'name',
    'email',
    'team_name',
    'player_name',
    'number',
    'size',
    'color_primary',
    'color_secondary',
    'logo_url',
    'notes',
    'status',
])]
class CustomJerseyRequest extends Model
{
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
