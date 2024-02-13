// //CORE MODULES
// const readline = require('readline');
// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// const events = require('events');


// fs.readFile('./Files/start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1)});


//     console.log(adam);


    // CORE MODULES
// const readline = require('readline');
// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// const events = require('events');

// fs.readFile('./Files/start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1);
// });

// const adam = 'some value'; // Define the variable 'adam' before logging it
// console.log(adam);

// app.js

// CORE MODULES
const fs = require('fs');

// Read the contents of a file named 'example.txt' from the current directory
fs.readFile('example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('Contents of example.txt:\n', data);
});

