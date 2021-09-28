# dic2021

DIC2021 Hackathon

## Problem
Viele Möglichkeiten sich aktivistisch zu betätigen, aber keine Übersicht
## Ansatz
App für Übersicht
### Vorteile
- inter-aktivistische Vernetzung
- gesammelte Veranstaltungen
## Scope
Frontend
- Android App
    - Karte
    - Filter
    - Favoriten
    - iCAL
    - Listenansicht
Backend
- Datenbank

## Bewertungskriterien *(je 25%)*
- Qualität der Software
- Innovationsgehalt der Lösung
- Nachhaltigkeitspotential
- Darstellung im Screencast
## Stack
Frontend:
- CSS
- Leaflet

Backend:
- MongoDB
- NodeJS
  - Mongoose
  - AndroidJs

## Data Structure
```js
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
```
### Filter
- Ort - GeoPoint
  - Umkreis
- 
- Art
- Zeitraum
- Host
- Tags
