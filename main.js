/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const { back } = require('androidjs');
const fs = require('fs');
const path = require('path');

// defin signal save-data to listen from front process

back.on('save-data', (filepath, msg) => {
  fs.writeFile(path.join(filepath, 'data.txt'), msg, (err) => {
    if (err) throw err;
    console.log('file saved');
  });
});

back.on('get-data', (filepath) => {
  fs.readFile(path.join(filepath, 'data.txt'), 'utf-8', (err, data) => {
    if (err) back.send('get-data-result', '@@');
    else back.send('get-data-result', data);
  });
});
