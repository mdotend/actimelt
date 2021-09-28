const mongoose = require('mongoose');

const bunyan = require('bunyan');

const log = bunyan.createLogger({ name: 'database' });

// db schemas
const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  location: {
    enum: ['Point'], // FIXME vllt falsch
  },
  eventDate: {
    type: Date,
    required: true,
  },
  comments: [{ body: String, date: Date }],
  host: {
    type: String,
    required: true,
  },
  imageUrl: String,
  meta: {
    created: { type: Date, default: Date.now },
    favs: { type: Number, defaul: 0 },
  },
});

// init models
const Event = mongoose.model('Event', EventSchema);

/**
 * connects to database
 */
async function dbConnect() {
  try {
    await mongoose.connect('mongodb://217.79.181.125:27017');
  } catch (error) {
    log.error(error);
  }
}

/**
 * adds new Event and saves it to database
 *
 * @param {object} pObject contains all event informations
 * @returns {Number} id of newly created event
 */
async function addEvent(pObject) {
  try {
    const newEvent = new Event(pObject);
    const newId = newEvent.id;
    await newEvent.save();
    return newId;
  } catch (error) {
    log.error(error);
    return null;
  }
}

/**
 * returns all events from database
 *
 * @returns {Events[]} Array of all Events
 */
async function getAllEvents() {
  const events = await Event.find();
  log.info('events', events);
  return events;
}

/**
 * filters events for location by point and radius
 *
 * @param {GeoPoint} point GeoPoint of Ort
 * @param {Number} radius in kilometers
 * @returns {Event[]} Array of events fitting filter
 */
async function filterEventsLocation(point, radius) {
  return [];
}
/**
 * filters events for location by point and radius
 *
 * @param {String} city name of city
 * @returns {Event[]} Array of events fitting filter
 */
async function filterEventsCity(city) {
  let events;
  try {
    events = Event.find({ city });
  } catch (error) {
    log.error(error);
  }
  return events;
}
/**
 * filters events for location by point and radius
 *
 * @param {String} type name of city
 * @returns {Event[]} Array of events fitting filter
 */
async function filterEventsType(type) {
  let events;
  try {
    events = Event.find({ city: type });
  } catch (error) {
    log.error(error);
  }
  return events;
}

/**
 * filters events for timerange by dates
 *
 * @param {date} from start date
 * @param {date} to end date
 * @returns {Event[]} Array of events fitting filter
 */
async function filterEventsTime(from, to) {
  let events;
  try {
    events = await Event.find({ eventDate: { $gte: from, $lte: to } });
  } catch (error) {
    log.error(error);
  }
  return events;
}

// export
module.exports = {
  dbConnect, addEvent, getAllEvents, filterEventsTime,
};
