# Projekt-Dokumentation

✍️ Ihr Nachname

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

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

Da ich als Datenkbank Firestore verwende, greiffe ich über den 

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |                 |      | Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️ |
|2|Muss|Funktional|Als ein Spieler des Glücksspiels möchte ich meinen Highscore sehen, damit ich mich mit anderen Usern vergleichen kann|
|3|Muss|Funktional|Als Admin möchte ich Phrasen erstellen, ändern und löschen können, damit ich den Inhalt der App bearbeiten kann.|
|4|Muss|Funktional|Als Spieler möchte ich Wörter und Fragen beantworten können, damit ich spielen kann.|
|5|Muss|Funktional|Als Administrator möchte ich mich durch meinen Benutzernamen und mein Passwort authentifizieren können, damit ich auf die Administrator-Funktionen zugreifen kann.|
|6|Muss|Funktional|Als Administrator möchte ich einzelne Einträge der Highscore-Liste löschen können, damit ich die Highscore-Liste aktuell halten und ungültige Einträge entfernen kann.|
| ...  |                 |      |                                    |

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
|2.1|Applikation muss gestartet sein, ein Spiel gespielt und gewonnen| - | Highscore kann angeschaut werden|
|3.1|Applikation gestartet, als Admin angemeldet| Phrase ändern| Phrase wurde geändert.|
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ X ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
