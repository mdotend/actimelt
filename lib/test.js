const bunyan = require('bunyan');
const db = require('./database');

const log = bunyan.createLogger({ name: 'test.js' });

async function main() {
  db.dbConnect();
  // log.info(await Promise.all(obj.map((event) => db.addEvent(event))));
  // db.getAllEvents();
  const data = await db.filterEventsTime(new Date('2021-08-01'), new Date('2021-09-05'));
  log.info('data', data);
}

main();
