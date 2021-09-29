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
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
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
    return true;
  } catch (error) {
    log.error(error);
    return false;
  }
}

/**
 * creates new Event
 * @param {object} pObject contains all event informations
 * @returns {Number} id of newly created event
 */
function createEvent(pObject) {
  try {
    return new Event(pObject);
  } catch (error) {
    log.error(error);
    return null;
  }
}

/**
 * saves it to database
 *
 * @param {Event} event object to be saved
 * @returns {Event} returns event if saved sucessfully
 */
async function saveEvent(event) {
  try {
    return event.save();
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
// async function filterEventsLocation(point, radius) {
//   return [];
// }
/**
 * filters events for location by the city
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
 * only return Events with location points for the usage on the map
 *
 * @returns {Event[]} Array of events fitting filter
 */
async function filterEmptyLocation() {
  let events;
  try {
    events = Event.find({ 'location.type': 'Point' });
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
  Event, dbConnect, createEvent, saveEvent, getAllEvents, filterEventsTime, filterEmptyLocation,
};
