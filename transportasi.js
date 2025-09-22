class Kendaraan {
    constructor(merk, tahun) {
        this.merk = merk;
        this.tahun = tahun;
    }
    
    infoKendaraan() {
        return `${this.merk} (${this.tahun})`;
    }
}

class Mobil extends Kendaraan {
    infoKendaraan() {
        return `Mobil ${this.merk} (${this.tahun})`;
    }
}

class Motor extends Kendaraan {
    infoKendaraan() {
        return `Motor ${this.merk} (${this.tahun})`;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    getInfo() {
        return `${this.nama} (${this.nomorTelepon}), menyewa ${this.kendaraanDisewa.infoKendaraan()}`;
    }
}

let daftar = [];

document.getElementById("formPelanggan").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let telepon = document.getElementById("telepon").value;
    let pilihan = document.getElementById("kendaraan").value;

    let kendaraan;
    if (pilihan === "mobil") {
        kendaraan = new Mobil("Toyota", 2020);
    } else {
        kendaraan = new Motor("Honda", 2022,);
    }

    let pelangganBaru = new Pelanggan(nama, telepon, kendaraan);
    daftar.push(pelangganBaru);

    tampilkanDaftar();

    document.getElementById("formPelanggan").reset();
});

function tampilkanDaftar() {
    let list = document.getElementById("daftarPelanggan");
    list.innerHTML = "";

    daftar.forEach(function(p) {
        let li = document.createElement("li");
        li.innerText = p.getInfo();
        list.appendChild(li)
    });
}