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
const list = [''];

rl.question('Masukkan nama anda: ', nama => {
   rl.question('Masukkan umur anda: ', umur => {
   try {
      list.push(`"name": "${nama}", "umur": "${umur}"`,)
      fs.writeFileSync('data/contact.json', `[{${list}}]`);
      console.log(`Data ${list} sudah terinput`);
   } catch (e) {
      console.log(e);
   }
   rl.close();
});
});