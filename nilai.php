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
        <h2>Hasil Nilai Ujian</h2>

        <?php 
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        if ($nilai > 70) {
            $status = 'Lulus';
        } else {
            $status = 'Remedial';
        }

        echo "Nama:" . $nama . "<br><br>";
        echo "Email:" . $email . "<br><br>";
        echo "Nilai:" . $nilai . "<br><br>";
        echo "Status: <b>" . $status . "<b><br><br>";

        ?>
    </div>
</body>
</html>