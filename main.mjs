import {index, store, destroy} from './controller.mjs';

const main = () => {

    // Menampilkan Data
    console.log("Data Awal");
    index();

    // Menambahkan Data
    store({nama: "Hoshi", umur: 29, alamat: "Jl. Sebong II", email: "hoshi@gmail.com"});
    store({nama: "Woozi", umur: 29, alamat: "Jl. Carat IV", email: "woozi@gmail.com"});
    store({nama: "Mingyu", umur: 28, alamat: "Jl. Carat V", email: "mingyu@gmail.com"})
    console.log("Menambahkan 3 Data");
    index();

    // Menghapus Data
    destroy();
    console.log("Menghapus Data")
    index();
};

main();