<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    private $authors = [
        [
            'id' => 1,
            'name' => 'J.K. Rowling',
            'photo' => 'jk_rowling.jpg',
            'bio' => 'British author, best known for the Harry Potter series.'
        ],
        [
            'id' => 2,
            'name' => 'George R.R. Martin',
            'photo' => 'george_rr_martin.jpg',
            'bio' => 'American novelist and short story writer, known for A Song of Ice and Fire.'
        ],
        [
            'id' => 3,
            'name' => 'Isaac Asimov',
            'photo' => 'isaac_asimov.jpg',
            'bio' => 'American author and professor of biochemistry, known for his works in science fiction.'
        ],
        [
            'id' => 4,
            'name' => 'Haruki Murakami',
            'photo' => 'murakami.jpg',
            'bio' => 'Japanese writer known for surrealistic novels.'
        ],
        [
            'id' => 5,
            'name' => 'Tere Liye',
            'photo' => 'tere_liye.jpg',
            'bio' => 'Indonesian best-selling novelist.'
        ],
    ];

    public function getAuthors()
    {
        return $this -> authors;
    }
}
