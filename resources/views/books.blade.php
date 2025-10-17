{{-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Daftar Buku</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <h1>Anyeong Chinggu</h1>
    <p>Selamat Datang di toko BookSales</p>

    @foreach ($books as $item)
        <div class="card">
            <table style="width:100%; border-collapse: collapse;">
                <tr>
                    <td><strong>Judul</strong></td>
                    <td>: {{ $item['title'] }}</td>
                </tr>
                <tr>
                    <td><strong>Deskripsi</strong></td>
                    <td>: {{ $item['description'] }}</td>
                </tr>
                <tr>
                    <td><strong>Harga</strong></td>
                    <td>: Rp{{ number_format($item['price'], 0, ',', '.') }}</td>
                </tr>
                <tr>
                    <td><strong>Stok</strong></td>
                    <td>: {{ $item['stock'] }}</td>
                </tr>
            </table>
        </div>
    @endforeach
</body>
</html> --}}
