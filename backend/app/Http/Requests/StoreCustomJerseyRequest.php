<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomJerseyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'team_name' => ['required', 'string', 'max:255'],
            'player_name' => ['required', 'string', 'max:255'],
            'number' => ['required', 'string', 'max:3'],
            'size' => ['required', 'string', 'max:10'],
            'color_primary' => ['required', 'string', 'max:50'],
            'color_secondary' => ['nullable', 'string', 'max:50'],
            'logo_url' => ['nullable', 'string', 'max:500'],
            'notes' => ['nullable', 'string', 'max:2000'],
        ];
    }
}
