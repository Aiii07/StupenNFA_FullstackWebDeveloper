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

    public function show($id)
    {
        $authors = Author::find($id);

        if (!$authors) {
            return response() -> json([
                'success' => false,
                'message' => 'Author Not Found'
            ], 404);
        }

        return response() -> json([
            'success' => true,
            'message' => 'Author Found',
            'data' => $authors
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $authors = Author::find($id);

        if (!$authors) {
            return response() -> json([
                'success' => false,
                'message' => 'Author Not Found'
            ], 404);
        }

        $validated = $request -> validate([
            'name' => 'required|string',
            'photo' => 'required|string',
            'bio' => 'required|string'
        ]);

        $authors -> update($validated);

        return response() -> json([
            'success' => true,
            'message' => 'Author Update Successfully',
            'data' => $authors
        ], 200); 
    }

    public function destroy($id) 
    {
        $authors = Author::find($id);

        if (!$authors) {
            return response() -> json([
                'success' => false,
                'message' => 'Author Not Found'
            ], 404);
        }

        $authors -> delete();

        return response() -> json([
            'success' => true,
            'message' => 'Author Delete Successfully',
        ], 200);
    }
}
