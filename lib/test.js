const bunyan = require('bunyan');
const db = require('./database');

const log = bunyan.createLogger({ name: 'test.js' });

async function main() {
  db.dbConnect();
  const myEvent = {
    name: 'Fridays for Future',
    description: 'Demo am Bundestag am 26.9.2021',
    city: 'Berlin',
    location: {
      coordinates: [
        13.4130771,
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
  // db.addEvent(myEvent);
  // log.info(await Promise.all(obj.map((event) => db.addEvent(event))));
  const eventList = await db.filterEmptyLocation();
  console.log(eventList);
  // const data = await db.filterEventsTime(new Date('2021-08-01'), new Date('2021-09-05'));
  // log.info('data', data);
}

main();
