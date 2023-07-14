

const getUserSync =  (id) => {
   let nama = '';
   id === 1 ? nama = 'Dhama' : nama = 'Yuan';
   return {id, nama}
}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'hello world';
console.log(halo);