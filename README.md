# DIC2021 - ActiMelt

Dieses Projekt ist die Abgabe des Team WUI für den Wettbewerbes "Digital Innovation Challenge" auf der #INFORMATIK2021.
Ziel der Challange war es, responsible.code() zu erzeugen.
## Problem
Das Problem, dass dieses Projekt zu lösen hofft, ist die schlechte Übersicht für Bürgerinnen über politische und aktivistische Aktionen wie Demonstrationen oder ähnliche. Diese Events werden häufig in einer Blase kommuniziert und erreichen daher nicht zwingend alle interessierten Personen.
## Ansatz
Eine Smartphone-App soll den Zugang für die Bürgerinnen vereinfachen, indem dort Events, die von den Versanstaltern eingetragen werden können, gesammelt und nach Vorlieben gefiltert werden können.
### Vorteile
Dadurch erhoffen wir uns einen erleichterten Zugang zu politischer Partizipation und eine brietere öffentliche Beteiligung.
Ein weiterer Vorteil kann die inter-aktivistische Vernetzung sein.

## Scope
Die Applikation soll im ersten Schritt folgende Features enthalten:
Frontend
- Smartphone App
    - Karte
    - Filter
    - Favoriten
    - Listenansicht
Backend
- Datenbank

## Stack
Für die Umsetzung wurde folgende Software verwendet:
- Die Applikation soll erstmal nur auf Android laufen und mit dem Framework AndroidJS die entwicklung mit node.js/HTML und CSS ermöglichen
- Für die Kartenansicht soll Leaflet genutzt werden
- Als Datenbank wird MongoDB genutzt, die auf einem privaten Server der Teilnehmenden in einem Docker Container läuft.
  - MongoDB lässt sich von Javascript mit dem Mongoose-Framework verwalten



## Data Structure
Für die Events wurde in MongoDB ein Schema erstellt, nach dem alle Event-Objekte gebildet werden. Entsprechend dem Schema können die Events auch gefiltert werden, zB nach der Nähe zu einem Punkt, der Zugehörigkeit zu einer Stadt oder nach einem bestimmten Zeitraum. Veranstaltungen können auch mit individuellen Tags versehen werden, wodurch auch sehr spezifisch gesucht werden kann.

## Umsetzung
Nach der Ideenfindung haben wir uns für eine Smartphone-App als Produkt-Form entschieden, da wir hoffen dadurch mehr Personen erreichen zu können als mit einer Webseite. Da wir alle bisher noch keine Smartphone-App entwickelt hatten, haben wir uns für eine Android-App auf Basis von Javascript mit dem Framwork AndroidJS entschieden, da wir die Hoffnung hatten, damit am einfachsten ein Produkt zu erhalten. Trotzdem war der Entwicklungsprozess teilweise sehr mühselig, besonders die Verbindung der einzelnen Features, die stark auf die Kommunikationskanäle des Frameworks angewiesen sind.
Durch eine einheitliche Programmierumgebung in Docker hatten wir keine Probleme mit der Kollaboration an dem Code.

## Probleme
Die Applikation ist im Moment ledigleich ein Prototyp, der hauptsächlich die Idee der Applikation veranschaulichen soll. Die Verbindung zwischen dem Frontend und der Datenbank hat bisher leider nur in Tests funktioniert und nicht in der Projektumgebung. Vermutlich liegt das größte Problem bei den asyncronen Aufrufen der Events aus der Datenbank. Das Erstellen und Filtern der Events funktioniert wie gewünscht, auch die Kartendarstellung und die Listenansicht machen prinzipiell keine Probleme, allerdings können aktuell keine Daten aus der Datenbank direkt in der Karte/Liste angezeigt werden, daher haben wir uns aus Zeitgründen für statische Events entschieden.  


## Ausblick
Für die Zukunft wären noch weitere Features denkbar, zB eine Kalenderfunktion, mit der die Events als .ical-Datei exportiert oder in einem internen Kalender angezeigt werden können. Auch sollen Events kommentierbar werden, das Schema wurde bereits darauf vorbereitet, es fehlt lediglich die Ein- und Ausgabe der Kommentare. 
Um Veranstalerinnen mehr Rechte in der App zu ermöglichen soll es die Möglichkeit zu Benutzeraccounts geben. Die Authentifizierung muss entsprechend abgesichert werden und die personenbezogenen Daten besonders geschützt werden. Für einfache Benutzer soll es keine Accounts geben; das vereinfacht den Zugang und sorgt dafür, dass Möglichst wenige persönliche Daten anfallen.
Ein weiteres Feature wäre eine Swipe-Ansicht für Events, analog zu bekannten Dating-Apps, Durch die Gamification soll ein Anreiz geschaffen werden, sich einfacher mit Events auseinander setzen zu können.