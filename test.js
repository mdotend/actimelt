const bunyan = require('bunyan');
const db = require('./database');

const log = bunyan.createLogger({ name: 'test.js' });

async function main() {
  db.dbConnect();
  log.info(await db.addEvent('asd'));
  db.getEvents();
}

main();
