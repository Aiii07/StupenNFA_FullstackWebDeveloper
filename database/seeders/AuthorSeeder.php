<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create([
            'name' => 'J.K. Rowling',
            'photo' => 'jk_rowling.jpg',
            'bio' => 'British author, best known for the Harry Potter series.' 
        ]);

        Author::create([
            'name' => 'George R.R. Martin',
            'photo' => 'george_rr_martin.jpg',
            'bio' => 'American novelist known for A Song of Ice and Fire.' 
        ]);

        Author::create([
            'name' => 'Isaac Asimov',
            'photo' => 'isaac_asimov.jpg',
            'bio' => 'American author and professor of biochemistry, known for his works in science fiction.' 
        ]);

        Author::create([
            'name' => 'Haruki Murakami',
            'photo' => 'murakami.jpg',
            'bio' => 'Japanese writer known for surrealistic novels.' 
        ]);

        Author::create([
            'name' => 'Tere Liye',
            'photo' => 'tere_liye.jpg',
            'bio' => 'Indonesian best-selling novelist.' 
        ]);
    }
}
