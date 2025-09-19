let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok:5 },
    { id: 2, nama: "Mouse", harga: 200000, stok:10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok:7 }
];

function tampilkanProduk() {
    console.log("Daftar Produk Toko:");
    for (let i = 0; i < produkToko.length; i++) {
        let p = produkToko[i];
        console.log(`ID: ${p.id}, Nama: ${p.nama}, Harga: ${p.harga}, Stok: ${p.stok}`);
    }
}

function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0? produkToko[produkToko.length -1].id + 1 : 1;
    let produkBaru = {id: idBaru, nama: nama, harga: harga, stok: stok};
    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" berhasil ditambahkan`);
}

function hapusProduk(id) {
    let index = produkToko.findIndex(p => p.id === id);
    if (index !== -1) {
        let hapus = produkToko.splice(index, 1);
        console.log(`Produk "${hapus[0].nama}" berhasil dihapus`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan`);
    }
} 

tampilkanProduk();
tambahProduk("Headset", 150000, 12);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();