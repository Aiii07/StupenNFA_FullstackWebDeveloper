<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Daftar Genre</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <h1>Anyeong Chinggu</h1>
    <p>Selamat Datang di Halaman Genres</p>
    @foreach ($genres as $genre)
        <div class="card">
            <table style="width:100%; border-collapse: collapse;">
                <tr>
                    <td><strong>ID</strong></td>
                    <td>: {{ $genre['id'] }}</td>
                </tr>
                <tr>
                    <td><strong>Nama</strong></td>
                    <td>: {{ $genre['name'] }}</td>
                </tr>
                <tr>
                    <td><strong>Deskripsi</strong></td>
                    <td>: {{ $genre['description'] }}</td>
                </tr>
            </table>
        </div>
    @endforeach
</body>
</html>