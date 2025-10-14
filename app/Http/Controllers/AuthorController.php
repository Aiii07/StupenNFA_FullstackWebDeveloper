<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

class AuthorController extends Controller
{
    public function index()
    {
        $authorModel = new Author();
        $authors = $authorModel -> getAuthors();

        return view('authors', ['authors' => $authors]);
    }
}
