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
            'message' => 'New Book Created',
            'data' => $books
        ], 201);
    }

    public function show($id)
    {
        $books = Book::find($id);

        if (!$books) {
            return response() -> json([
                'success' => false,
                'message' => 'Book Not Found'
            ], 404);
        }

        return response() -> json([
            'success' => true,
            'message' => 'Book Found',
            'data' => $books
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $books = Book::find($id);

        if (!$books) {
            return response() -> json([
                'success' => false,
                'message' => 'Book Not Found'
            ], 404);
        }

        $validated = $request -> validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'cover_photo' => 'required|string'
        ]);

        $books -> update($validated);

        return response() -> json([
            'success' => true,
            'message' => 'Book Update Successfully',
            'data' => $books
        ], 200); 
    }

    public function destroy($id) 
    {
        $books = Book::find($id);

        if (!$books) {
            return response() -> json([
                'success' => false,
                'message' => 'Book Not Found'
            ], 404);
        }

        $books -> delete();

        return response() -> json([
            'success' => true,
            'message' => 'Book Delete Successfully',
        ], 200);
    }
}
