<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;

class GenreController extends Controller
{
    public function index ()
    {
        $genres = Genre::all();

        return response() -> json([
            'success' => true,
            'message' => 'Get All Resources',
            'data' => $genres
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request -> validate([
            'name' => 'required|string',
            'description' => 'required|string'
        ]);

        $genres = Genre::create($validated);
        
        return response() -> json([
            'success' => true,
            'message' => 'New Author Created',
            'data' => $genres
        ], 201);
    }
}
