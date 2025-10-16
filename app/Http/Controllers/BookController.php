<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index ()
    {
        $books = Book::all();

        return response() -> json([
            'success' => true,
            'message' => 'Get All Resources',
            'data' => $books
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request -> validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'cover_photo' => 'required|string'
        ]);

        $books = Book::create($validated);
        
        return response() -> json([
            'success' => true,
            'message' => 'New Author Created',
            'data' => $books
        ], 201);
    }
}
