<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas PP 1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Form Nilai Ujian</h2>
        <form action="nilai.php" method="POST">
            <label>Nama:</label>
            <input type="text" name="nama" required>
            <br><br>

            <label>Email:</label>
            <input type="email" name="email" required>
            <br><br>

            <label>Ujian:</label>
            <input type="number" name="nilai" required>
            <br><br>

        <input type="submit" value="kirim">
        </form>
    </div>
</body>
</html>