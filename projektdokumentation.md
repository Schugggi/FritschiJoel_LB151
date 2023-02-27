# Projekt-Dokumentation

✍️ Ihr Nachname

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|05.02.2023| 1.0.0   |  Projekt erstellen und hochladen, ausbauen von Projektdokumentation|
| 06.02.2023| 1.0.1   |    Anfang vom Coden, Spiel       |
|   13.02.2023   | 1.0.2   |   Inputs werden generiert, aber Clientseitig     |       | 0.0.5   |                                                              |
|   20.02.2023    | 1.0.3   |      Von Clientseitig auf API Routes gewechselt          |
|   24.02.2023    | 1.0.4   |         Admin Seite erstellt         |
|   26.02.2023    | 1.0.5   |         Letzte änderungen         |

# 0 Ihr Projekt

✍️ Spielen Sie eine Glücksrad-Webapplikation, bei dem Sie Wörter oder Redewendungen in einem Gitter erraten müssen, während Sie versuchen, möglichst hohe Geldbeträge zu gewinnen.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Glücksrad darstellen
* Tier 2 (Webserver): Eingaben überprüfen
* Tier 3 (Application Server): Funktionen der Glücksrades, auswertung.
* Tier 4 (Dataserver): highscore speichern; Phrasen und Rätselwörter anlegen, ändern und löschen.

# 2 Technologie

✍️ Beschreiben Sie für dieselben Tiers, welche Programmiersprache bzw. Technologie Sie verwenden möchten.

* Tier 1 (Presentation): Next.js, HTML, CSS
* Tier 2 (Webserver): Next.js
* Tier 3 (Application Server): Next.js 
* Tier 4 (Dataserver): firestore

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 

Da ich als Datenkbank Firestore verwende, greiffe ich über Firestore Funktionen auf die Datenbank zu und lese von da Rätselwörter aus.

# 4.1 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
|1|Muss|Funktional|Als ein Spieler des Glücksspiels möchte ich meinen Highscore sehen, damit ich mich mit anderen Usern vergleichen kann|
|2|Muss|Funktional|Als Admin möchte ich Phrasen erstellen, ändern und löschen können, damit ich den Inhalt der App bearbeiten kann.|
|3|Muss|Funktional|Als Spieler möchte ich Wörter und Fragen beantworten können, damit ich spielen kann.|
|4|Muss|Funktional|Als Administrator möchte ich mich durch meinen Benutzernamen und mein Passwort authentifizieren können, damit ich auf die Administrator-Funktionen zugreifen kann.|
|5|Muss|Funktional|Als Administrator möchte ich einzelne Einträge der Highscore-Liste löschen können, damit ich die Highscore-Liste aktuell halten und ungültige Einträge entfernen kann.|
| 6  |   Muss    |   Funktional   |  Als Spieler möchte ich Buchstaben eingeben können damit ich raten kann |
|7|Muss|Funktional|Als Spieler möchte ich meinen eingegebenen Buchstaben checken können, damit ich sehe ob ich richtig geraten habe.|


# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
|1.1|Applikation gestartet, ein Spiel gespielt und gewonnen| - | Highscore kann angeschaut werden|
|6.1|Applikation gestartet|Buchstabe|Buchstabe kann eingegeben werden|
|7.1|Applikation gestartet|Buchstabe eingegeben, Button Guess drücken| Wenn Buchstabe richtig, wird Buchstabe angezeigt, wenn buchstabe falsch wird nicht angezeigt|

# 5 Prototyp

![alt text](https://github.com/Schugggi/FritschiJoel_LB151/master/Mockup_GUI.PNG)

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| 1        |    13.02.2023   |   Programmieren des Spiels  |
|6|13.02.2023|Input Feld beidem nur 1 Buchstabe eingegeben werden kann|
|7|13.02.2023|Button um eingegebener Buchstabe zu überprüfen|

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | Nein |    index.js, gameHandler.js, wordList.js        |
| 6  |    Ja       |   index.js          |
| 7  |    Ja       |   index.js, gameHanderl.js          |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.
https://youtu.be/TX-9J__MXWo

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |   27.02.2023    |   n.O.k, Spiel kann nicht gewonnen werden und Highscoreliste existiert nicht.       |  Joel Fritschi      |
| 6.1  |   27.02.2023    |    O.k.      |   Joel Fritschi     |
|7.1|27.02.2023|O.k.|Joel Fritschi|

## Fazit:
Es wurden definitiv nicht alle nötigen Grundfunktionen implemenentiert damit die Applikation als Prototyp gebraucht werden könnte. Die Applikation kann so nicht dem Kunden übergeben werden und benötigt definiti mehr Zeit in der Entwicklung.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
