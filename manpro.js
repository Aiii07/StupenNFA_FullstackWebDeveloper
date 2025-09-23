let produkList = [
    {id: 1, nama: "Laptop", harga: 12000000},
    {id: 2, nama: "Smartphone", harga: 5000000},
    {id: 3, nama: "Tablet", harga: 7000000},
    {id: 4, nama: "Kamera", harga: 8000000},
    {id: 5, nama: "Smartwatch", harga: 2000000}
];

const eventHandler = {
    tampilkan: () => tampilkanProduk(),
    tambah: () => {
        tambahProduk({id: 6, nama: "Headphone", harga: 1500000});
        alert("Produk baru ditambahkan");
        tampilkanProduk();
    },

    hapus: () => {
        hapusProduk(6);
        alert("produk terakhir dihapus");
        tampilkanProduk();
    }
};

function tambahProduk(...produkBaru) {
    produkList = [...produkList, ...produkBaru];
}
function hapusProduk(...idProduk) {
    produkList = produkList.filter(p => !idProduk.includes(p.id));
}

function tampilkanProduk() {
    const output = document.getElementById("output");
    output.innerHTML = "";~
    produkList.forEach(({id, nama, harga}) => {
        output.innerHTML += `${id}. ${nama} - Rp.${harga} <br>`;
    });
}

document.getElementById("btnTampil").addEventListener("click", eventHandler.tampilkan);
document.getElementById("btnTambah").addEventListener("click", eventHandler.tambah);
document.getElementById("btnHapus").addEventListener("click", eventHandler.hapus);