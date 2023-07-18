const { tulisPertanyaan, simpanContact } = require('./contacts.js')

const main = async () => {
   const nama = await tulisPertanyaan('Masukkan Nama Anda: ');
   const email = await tulisPertanyaan('Masukkan Email Anda: ');
   const noHP = await tulisPertanyaan('Masukkan noHP Anda: ');

   simpanContact(nama, email, noHP);
}

main();