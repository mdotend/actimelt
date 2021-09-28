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
  eventDate: {
    type: Date,
    required: true,
  },
  comments: [{ body: String, date: Date }],
  host: {
    type: String,
    required: true,
  },
  // TODO: TitleImage
  meta: {
    created: { type: Date, default: Date.now },
    favs: { type: Number, defaul: 0 },
  },
});

// init models
const Event = mongoose.model('Event', EventSchema);

// db functions
async function dbConnect() {
  try {
    await mongoose.connect('mongodb://217.79.181.125:27017');
  } catch (error) {
    log.error(error);
  }
}

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

async function getEvents() {
  log.info(await Event.find());
}

// export
module.exports = { dbConnect, addEvent, getEvents };
