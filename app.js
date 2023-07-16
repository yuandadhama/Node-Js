const fs = require('fs');

//menulis string ke file (synchronous)
// try {
//    fs.writeFileSync('data/test.txt', 'hello world secara syncrhonous!');
// } catch (e) {
//    console.log(e);
// }

//menulis string ke file (asynchronous) 
// fs.writeFile('data/test.txt', 'hello world asynchronous', e => {
//    console.log(e);
// })

//membaca isi file (synchronous) 
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

//membaca isi file (asynchronous) 
// fs.readFile('data/test.txt', 'utf-8', (e, data) => {
//    if (e) throw e;
//    console.log(data);
// })

const readLine = require('readline');
const rl = readLine.createInterface({
   input: process.stdin,
   output: process.stdout
})
const filePath = 'data/contact.json';

rl.question('Masukkan nama anda: ', nama => {
   rl.question('Masukkan no HP anda: ', noHP => {
      // menyimpan data menjadi sebuah object
      const valueData = {nama, noHP,};

      // membaca data di file JSON, file yang akan di isi
      const fileToFill = fs.readFileSync(filePath, 'utf8');

      // mengconvert file JSON string yang akan di isi menjadi object
      const contacts = JSON.parse(fileToFill);

      // mengisi contacts / fileToFill yang sudah di convert dengan valueData
      contacts.push(valueData);
      
      // menuliskan hasil dari contacts yang sudah di isi menjadi JSON di filePath
      fs.writeFileSync(filePath, JSON.stringify(contacts), 'utf-8');

      console.log(`data terinput`);
      rl.close();
   });
});