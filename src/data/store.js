const fs = require('node:fs');
const path = require('node:path');

const seedPath = path.join(__dirname, 'seed.json');
const initialData = JSON.parse(fs.readFileSync(seedPath, 'utf-8'));

const store = {
  speakers: structuredClone(initialData.speakers || []),
  events: structuredClone(initialData.events || []),
  attendees: structuredClone(initialData.attendees || []),
  registrations: structuredClone(initialData.registrations || [])
};

module.exports = {
  speakers: store.speakers,
  events: store.events,
  attendees: store.attendees,
  registrations: store.registrations,
  store
};