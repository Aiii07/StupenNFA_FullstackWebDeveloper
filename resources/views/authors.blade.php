<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Daftar Penulis</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <h1>Anyeong Chinggu</h1>
    <p>Selamat Datang di Halaman Authors</p>
    @foreach ($authors as $author)
        <div class="card">
            <table style="width:100%; border-collapse: collapse;">
                <tr>
                    <td><strong>ID</strong></td>
                    <td>: {{ $author['id'] }}</td>
                </tr>
                <tr>
                    <td><strong>Nama</strong></td>
                    <td>: {{ $author['name'] }}</td>
                </tr>
                <tr>
                    <td><strong>Foto</strong></td>
                    <td>: {{ $author['photo'] }}</td>
                </tr>
                <tr>
                    <td><strong>Bio</strong></td>
                    <td>: {{ $author['bio'] }}</td>
                </tr>
            </table>
        </div>
    @endforeach
</body>
</html>