<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();

        return response() -> json([
            'success' => true,
            'message' => 'Get All Resources',
            'data' => $authors
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request -> validate([
            'name' => 'required|string',
            'photo' => 'required|string',
            'bio' => 'required|string'
        ]);

        $authors = Author::create($validated);
        
        return response() -> json([
            'success' => true,
            'message' => 'New Author Created',
            'data' => $authors
        ], 201);
    }
}
