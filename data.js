document.getElementById("formPegawai").addEventListener("submit", function(e) {
    e.preventDefault();

    // Data input form
    let nama = document.getElementById("nama").value;
    let umur = parseInt(document.getElementById("umur").value);
    let jabatan = document.getElementById("jabatan").value;
    let status = document.getElementById("status").value;

    // Menghitung gaji pokok
    let gapok = 0;
    if (jabatan === "manajer") {
        gapok = 15000000;
    } else if (jabatan === "asisten manajer") {
        gapok = 10000000;
    } else if (jabatan === "staff") {
        gapok = 5000000;
    }

    // Menghitung Tunjangan
    let tunjanganJabatan = 0.15 * gapok;
    let bpjs = 0.10 * gapok;
    let tunjanganKeluarga = (status === "menikah") ? 0.20 * gapok : 0;

    // Menghitung total gaji
    let total = gapok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    document.getElementById("dataPegawai").innerHTML = `
    <tr>
    <td>${nama}</td>
    <td>${umur}</td>
    <td>${jabatan}</td>
    <td>${status}</td>
    <td>Rp ${gapok.toLocaleString()}</td>
    <td>Rp ${tunjanganJabatan.toLocaleString()}</td>
    <td>Rp ${bpjs.toLocaleString()}</td>
    <td>Rp ${tunjanganKeluarga.toLocaleString()}</td>
    </tr>
    `;

    document.getElementById("totalGaji").innerText = "Rp. " + total.toLocaleString();
});