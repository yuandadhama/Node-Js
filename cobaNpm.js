const validator = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('yuanda@gmail.com'));
console.log(validator.isMobilePhone('0812345678','id-ID'));

