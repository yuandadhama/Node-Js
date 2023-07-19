const yargs = require("yargs");

yargs.command({
   command: 'add',
   describe: 'menambah contacts baru',
   builder: {
      nama: {
         describe: 'Nama Lengkap',
         demandOption: true,
         type: 'string',
      },
      email: {
         describe: 'Email',
         demandOption: false,
         type: 'string'
      },
      noHP: {
         describe: 'noHP',
         demandOption: false,
         type: 'string'
      },
   },
   handler(argv) {
      const contact = {
         nama: argv.nama,
         email:argv.email,
         noHP: argv.noHP,
      };
      console.log(contact);
   }
});

