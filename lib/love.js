/**
 * Contains dummy event data
 */
module.exports = [
  {
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
  },
  {
    name: 'Fridays for Future Hamburg',
    description: 'Demo an der Elbphilharmonie  am 1.9.2021',
    city: 'Hamburg',
    location: {
      type: 'Point',
      coordinates: [
        9.9819421,
        53.5413297,
      ],
    },
    eventDate: new Date('2021-09-01'),
    comments: [
      {
        body: 'Mega',
        date: new Date('2021-08-25'),
      }, {
        body: 'Hab Bock',
        date: new Date('2021-08-24'),
      },
    ],
    host: 'Fridays For Future Hamburg',
    imageUrl: 'https://www.zdf.de/assets/fridays-for-future-hamburg-102~3840x2160?cb=1582303076437',
  },
];
