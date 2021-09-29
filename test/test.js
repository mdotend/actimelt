const chai = require('chai');

const { expect } = chai;
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { describe, it, xit } = require('mocha');

const db = require('../lib/database');

describe('database', () => {
  it('dbConnect', () => {
    // Arrange
    const expected = true;
    // Act
    const actual = db.dbConnect();
    // Assert
    return expect(actual).eventually.eql(expected);
  });

  it('createEvent', async () => {
    // Arrange
    const opts = {
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
    // Act
    const actual = await db.createEvent(opts);
    // Assert
    expect(actual.name).to.eql(opts.name);
    expect(actual.city).to.eql(opts.city);

    /**
     * // Assert
    // eslint-disable-next-line no-underscore-dangle
    // expect(Object.entries(actual._doc)).to.have.deep.members(Object.entries(opts));
    // eslint-disable-next-line no-underscore-dangle
    expect(Object.values(actual._doc)).to.have.deep.members(Object.values(opts));

     */
  });

  it('saveEvent', async () => {
    const opts = {
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
    await db.dbConnect();
    const event = db.createEvent(opts);
    // Act
    const actual = await db.saveEvent(event);
    // Assert
    expect(actual).to.eql(event);
  });

  xit('getAllEvents', async () => {
    const opts = {
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
    await db.dbConnect();
    const event = db.createEvent(opts);
    // Act
    const actual = await db.saveEvent(event);
    // Assert
    expect(actual).to.eql(event);
  });
});
