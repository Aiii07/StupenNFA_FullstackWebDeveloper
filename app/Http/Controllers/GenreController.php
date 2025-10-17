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
            'message' => 'New Genre Created',
            'data' => $genres
        ], 201);
    }

    public function show($id)
    {
        $genres = Genre::find($id);

        if (!$genres) {
            return response() -> json([
                'success' => false,
                'message' => 'Genre Not Found'
            ], 404);
        }

        return response() -> json([
            'success' => true,
            'message' => 'Genre Found',
            'data' => $genres
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $genres = Genre::find($id);

        if (!$genres) {
            return response() -> json([
                'success' => false,
                'message' => 'Genre Not Found'
            ], 404);
        }

        $validated = $request -> validate([
            'name' => 'required|string',
            'description' => 'required|string'
        ]);

        $genres -> update($validated);

        return response() -> json([
            'success' => true,
            'message' => 'Genre Update Successfully',
            'data' => $genres
        ], 200); 
    }

    public function destroy($id) 
    {
        $genres = Genre::find($id);

        if (!$genres) {
            return response() -> json([
                'success' => false,
                'message' => 'Genre Not Found'
            ], 404);
        }

        $genres -> delete();

        return response() -> json([
            'success' => true,
            'message' => 'Genre Delete Successfully',
        ], 200);
    }
}
