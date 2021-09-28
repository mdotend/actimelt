const db = require('./database');

async function main() {
  db.dbConnect();
  console.log(await db.addEvent('asd'));
  db.getEvents();
}

main();
