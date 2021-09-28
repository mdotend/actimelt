const mongoose = require('mongoose');

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
  coordinates: {
    long: Number,
    lat: Number,
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

// db functions
async function dbConnect() {
  await mongoose.connect('mongodb://217.79.181.125:27017');
}

async function addEvent(pObject) {
  const newEvent = new Event(pObject);
  const newId = newEvent.id;
  await newEvent.save();
  return newId;
}

async function getEvents() {
  console.log(await Event.find());
}

// export
module.exports = { dbConnect, addEvent, getEvents };
