/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const { back } = require('androidjs');
const db = require('./lib/database');

back.on('submitTest', (json) => {
  console.log(json);
});

back.on('createTable', async () => {
  const data = await db.getAllEvents();
  back.send('updateView', data);
});
