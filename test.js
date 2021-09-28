const bunyan = require('bunyan');
const db = require('./database');

const log = bunyan.createLogger({ name: 'test.js' });

async function main() {
  db.dbConnect();
  const obj = {
    name: 'Fridays for Future',
    description: 'Demo am Bundestag am 26.9.2021',
    city: 'Berlin',
    location: {
      type: 'Point',
      coordinates: [
        13.4110771,
        52.4955024,
      ],
    },
    eventDate: new Date('2021-09-26'),
    comments: [
      {
        body: 'Sehr nice',
        date: new Date('2021-09-25'),
      }, {
        body: 'LoL',
        date: new Date('2021-09-24'),
      },
    ],
    host: 'Fridays For Future',
    imageUrl: 'https://static.dw.com/image/55050320_303.jpg',
  };
  log.info(await db.addEvent(obj));
  db.getAllEvents();
}

main();
