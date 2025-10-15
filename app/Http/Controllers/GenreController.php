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
}
