const mongoose = require('mongoose');

// db schemas
const EventSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// init models
const Event = mongoose.model('Event', EventSchema);

// db functions
async function dbConnect() {
  await mongoose.connect('mongodb://217.79.181.125:27017');
}

async function addEvent(pName) {
  const newEvent = new Event({ name: pName, description: 'Hello there' });
  const newId = newEvent.id;
  await newEvent.save();
  return newId;
}

async function getEvents() {
  console.log(await Event.find());
}

// export
module.exports = { dbConnect, addEvent, getEvents };
