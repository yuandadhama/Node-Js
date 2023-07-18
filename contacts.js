const fs = require('fs');
const readLine = require('readline');

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

const rl = readLine.createInterface({
   input: process.stdin,
   output: process.stdout
})

const dirPath = './data'
if (!fs.existsSync(dirPath)) {
   fs.mkdirSync(dirPath);
}

const filePath = './data/contacts.json';
if(!fs.existsSync(filePath)) {
   fs.writeFileSync(filePath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
   return new Promise((resolve, reject) => {
      rl.question(pertanyaan, nama => {
         resolve(nama);
      });
   });
}

const simpanContact = (nama, email, noHP) => {
    //  menyimpan data menjadi sebuah object
    const valueData = {nama, email, noHP,};
   
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
}

module.exports = {tulisPertanyaan, simpanContact}
