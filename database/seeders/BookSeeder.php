<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'title' => 'Pulang',
            'description' => 'Petualangan seorang pemuda yang kembali ke desa kelahirannya.',
            'price' => 40000,
            'stock' => 15,
            'cover_photo' => 'pulang.jpg',
            'genre_id' => 1,
            'author_id' => 5
        ]);

        Book::create([
            'title' => 'Sebuah Seni untuk Bersikap Bodo Amat',
            'description' => 'Buku yang membahas tentang kehidupan dan filosofi hidup seseorang.',
            'price' => 25000,
            'stock' => 5,
            'cover_photo' => 'sebuah_seni.jpg',
            'genre_id' => 2,
            'author_id' => 3
        ]);

        Book::create([
            'title' => 'Laskar Pelangi',
            'description' => 'Kisah anak-anak Belitong yang penuh semangat mengejar pendidikan.',
            'price' => 30000,
            'stock' => 10,
            'cover_photo' => 'laskar_pelangi.jpg',
            'genre_id' => 3,
            'author_id' => 4
        ]);

        Book::create([
            'title' => 'Rindu',
            'description' => 'Novel karya Tere Liye yang mengisahkan perjalanan spiritual penuh makna.',
            'price' => 35000,
            'stock' => 8,
            'cover_photo' => 'rindu.jpg',
            'genre_id' => 2,
            'author_id' => 5
        ]);

        Book::create([
            'title' => 'Filosofi Kopi',
            'description' => 'Kumpulan cerita dan filosofi kehidupan dari sebuah kedai kopi.',
            'price' => 28000,
            'stock' => 12,
            'cover_photo' => 'filosofi_kopi.jpg',
            'genre_id' => 1,
            'author_id' => 2
        ]);
    }
}
