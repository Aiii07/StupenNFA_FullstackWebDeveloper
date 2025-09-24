import users from './data.mjs';

const index = () => {
    console.log("Daftar Users");
    users.map((user, i) => {
        console.log(`${i + 1}. ${user.nama} - ${user.umur} tahun - ${user.alamat} - ${user.email}`);
    });
};

// Menambahkan Data
const store = (user) => {
    users.push(user);
};

// Menghapus Data
const destroy = () => {
    users.pop();
};

export {index, store, destroy};