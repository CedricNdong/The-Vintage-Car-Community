<h1  style="text-align: center;"> VintageCarCommunity </h1>
<h3  style="text-align: center;"> Pflichtenheft  </h3>

<br>

# Use Case Diagramm

![](Diagrams/usecases.svg)

<hr>

# Anforderungsspezifikationen

### StR.L.1:

| Abschnitt | Beschreibung |
| --- | --- |
| Name |               Lagerhalter  Konto anlegen                |
| Primärer Akteur |            Lagerhalter             |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |           Konto anlegen, Ort des Einlagerns, Kosten für der Einlagerung, Servicezeiten und Lagerungbedigungen eingeben             |
| Auslösendes Ereignis (Trigger) |                 Lagerhalter möchte sich registerieren                     |
| Beschreibung |            Registrieren von dem Lagerhalter, dazu Ort des Einlagerns, Kosten für die Einlagerung Servicezeiten und Lagerbedigungen (z.B. beheizt, UV-geschutzt, Klimatisiert, 24h Zugang, Wachschutz) eingeben             |
| Beziehung zu anderen Use Cases |            ...           |



| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Der Lagerhalter möchte sich registrieren |
| Vorbedingung | Der Lagerhalter hat eine gültige E-Mail Adresse|
| Nachbedingung |Der Lagerhalter hat ein Konto erstellt.|
| Hauptszenario |1. Der Lagerhalter geht auf die Registrierungsseite.<br>2. Das System zeigt die Registrierungsseite an.<br>3. Der Lagerhalter gibt seine E-Mail-Adresse und sein Passwort ein.<br>4. Das System verifiziert die Eingaben.<br>Das System legt ein Lagerkonto an.<br>6. Die Profilseite wird geöffnet.<br>7. Der Lagerhalter gibt seine Daten ein.<br>8. Der Lagerhalter drückt auf die Schaltfläche "Speichern".|
| Alternativszenarien |                      |
| Ausnahme szenarien |4a. Die E-Mail wurde bereits registriert.<br>5. Das System zeigt die Meldung "Ihre E-Mail ist bereits registriert" an.|

<hr>

### StR.L.2:

| Abschnitt | Beschreibung |
| --- | --- |
| Name |            Einlagerungsservices anbieten           |
| Primärer Akteur |            Lagerhalter             |
| Weitere Akteure |                 ...|
| Stakeholder-Ziel(e) |            Verschiedenen Services für die Einlager, wie Einschweißen anbieten            |
| Auslösendes Ereignis (Trigger) |                 Lagerhalter möchte eine Service anbieten                    |
| Beschreibung |             Die Lagerhalter sollen verschiedene Services für die Einlagerung von Fahrzeugen anbieten können, z.B. Einschweißen des Fahrzeuges in Folie, Glasbox etc.            |
| Beziehung zu anderen Use Cases |            ...       |
<br>


| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Der Lagerhalter möchte eine Service anbieten. |
| Vorbedingung | Der Lagerhalter hat ein Konto.|
| Nachbedingung |Der Lagerhalter stellt seine Service zur Verfügung.|
| Hauptszenario |1. Der Lagerhalter klickt auf "Lager Service anbieten".<br>2. Das System zeigt ein Formular an.<br>3. Der Lagerhalter gibt einen Servicenamen und die Beschreibung der service ein.<br>4. Der Lagerhalter bestätigt seine Eingabe.<br>5. Das System verknüpft die angebotene Dienstleistung mit dem Profil des Lagerhalters.|
| Alternativszenarien |                      |
| Ausnahme szenarien |4a. Die E-Mail wurde bereits registriert.<br>5. Das System eigt die Meldung "Ihre E-Mail ist bereits registriert" an.|

<hr>

### StR.L.3: 

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Kapazitäten angeben                    |
| Primärer Akteur |            Lagerhalter             |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |            Lagerhalter sollen auch angeben können, wie viele Plätze in welcher Kategorie für Fahrzeuge momentan zur Verfügung stehen             |
| Auslösendes Ereignis (Trigger) |                 Lagerhalter möchte die Anzahl der verfügbaren Plätze angeben                    |
| Beschreibung |            Eingeben der aktuellen Anzahl von Plätzen und iherer Kategorie, die zur Verfügung stehen             |
| Beziehung zu anderen Use Cases |            ...         |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Lagerhalter möchte die Anzahl der verfügbaren Plätze angeben. |
| Vorbedingung | Der Lagerhalter hat ein Konto.|
| Nachbedingung |Kapazitäten sind sichtbar|
| Hauptszenario |1. Der Lagerhalter geht auf seinem Profil<br>2. Lagerhalter geht in den Kapazitätsbereich<br>3. Lagerhalter drückt auf Bearbeiten<br>4. Das System zeigt im Dialog alle Kapazitäten an<br>5. Der Lagerhalter gibt die Kapazität und die Kategorie ein.<br>6. Der Lagerhalter klickt auf speichern<br>7. Das System zeigt die Kapazitäten an.|
| Alternativszenarien |                      |
| Ausnahme szenarien |...|

<hr>

### StR.L.4: 

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                Spezialgebiet angeben |
| Primärer Akteur |            Lagerhalter |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |            Der Lagerhalter gibt an, auf welche Fahrzeugmarken er spezialisiert ist .            |
| Auslösendes Ereignis (Trigger) |                 Der Lagerhalter möchte sein Spezialgebiet angeben |
| Beschreibung |            Der Lagerhalter wählt Fahrzeugmarken, auf sie er spezialisiert ist. Die Auswahlsliste soll auf dem System  vorhalten             |
| Beziehung zu anderen Use Cases |            ...           |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Lagerhalter möchte sein Spezialgebiet angeben |
| Vorbedingung | Lagerhalter hat ein Konto|
| Nachbedingung | Spezialgebiet wird angezeigt |
| Hauptszenario | 1. Der Lagerhalter geht auf seiner Profilseite<br>2. Der Lagerhalter geht in den Bereich Spezialgebiet<br>3. Der Lagerhalter drückt auf Bearbeiten<br>4. Das System zeigt eine Liste mit allen Spezialgebieten an<br>5. Der Lagerhalter wählt aus der Liste aus, auf welche Automarken er spezialisiert ist<br>6. Der Lagerhalter klickt auf Speichern<br>7. Das System zeigt die Spezialitäten an. |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien |...|

<hr>

### StR.L.5: 

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Infromationen bereitstellen |
| Primärer Akteur |            Lagerhalter             |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |             Informationen über die Fahrbereitschaft des jeweiligen Fahrzeuges zur Verfügung stellen            |
| Auslösendes Ereignis (Trigger) |                 Lagerhalter möchte Informationen über die Fahrbereitschaft  angeben/aktualisieren                   |
| Beschreibung |            aktuelle Informationen über  den Wartungsstand des jeweiligen Fahrzeuges sollen bereitgestellt             |
| Beziehung zu anderen Use Cases |            ...             |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Lagerhalter möchte Informatinen über die Fahrbereitschaft angeben/aktuallisieren |
| Vorbedingung | Lagerhalter hat ein Konto |
| Nachbedingung | Fahrbereitschaft wird angezeigt |
| Hauptszenario | 1. Der Lagerhalter Klickt geht auf "Eingelagerte Autos" bereich.<br>2. das System zeigt dem Lagerhalter eine Tabellenansicht samt Informationen über die eingelagerten Auto.<br>3. Der Lagerhalter wählt ein Auto.<br>5. Der Lagerhalter drückt auf "Bearbeiten".<br>6. Das System öffnet einen Dialog zum Bearbeiten.<br>7. Der Lagerhalter bearbeitet die Fahrbereitschaft.<br>8. Der Lagerhalter klickt auf speichern. |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.L.6 :
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Reparaturanfragen an Werkstätten einstellen |
| Primärer Akteur |            Lagerhalter             |
| Weitere Akteure |                  Werkstatt                 |
| Stakeholder-Ziel(e) |      Die Lagerhalter können Anfragen zu Reparaturen und Wartungsarbeiten einstellen.           |
| Auslösendes Ereignis (Trigger) |              Knopf drücken                  |
| Beschreibung |             Die Lagerhalter können Anfragen zu Reparaturen und Wartungsarbeiten an registrierte Werkstätten in der Nähe einstellen.            |
| Beziehung zu anderen Use Cases |           ...          |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Der Lagerhalter möchte eine Reparaturanfrage an Werkstatt einstellen |
| Vorbedingung | Lagerhalter hat ein Konto |
| Nachbedingung | Lagerhalter hat das passende Werkstatt
gefunden und ein Reparaturanfragen
eingestellt |
| Hauptszenario | 1. Der Lagerhalter geht in den Bereich "Werkstätte" und wählt eine Werkstatt aus.<br>2. Das System öffnet die Seite von der gewählten Werkstatt.<br>3. Lagerhalter klickt auf "Reparaturanfrage einstellen".<br>4. Das System öffnet einen Dialog<br>5. Lagerhalter schreibt eine Anfrage<br>6. Der Lagerhalter klickt auf Absenden.<br>7. Das System zeigt die Meldung
"Reparaturauftrag wurde gestellt" an |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.L.7:

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                Termin mit Werkstatt vereinbaren                     |
| Primärer Akteur |            Lagerhalter             |
| Weitere Akteure |                 Werkstattt                     |
| Stakeholder-Ziel(e) |             Termine für Reparaturen oder Wartungsarbeiten vereinbaren           |
| Auslösendes Ereignis (Trigger) |                 Button drücken |
| Beschreibung |      Der  Lagerhalter vereinbart einen Termin mit der Werkstatt für Reparaturen oder Wartungsarbeiten. Der Lagerhalter wählt über eine Kalender aus verfügbaren Terminen aus|
| Beziehung zu anderen Use Cases |            ...             |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Button drücken ( Termin mit Werkstatt) |
| Vorbedingung | Lagerhalter hat ein Konto |
| Nachbedingung | Lagerhalter bucht einen Termin bei Werkstatt |
| Hauptszenario | 1. Der Lagerhalter wählt eine Werkstatt aus.<br>2. Der Lagerhalter klickt auf "Termin buchen".<br>3. Das System öffnet einen Dialog mit einem Kalender, in dem die verfügbaren Termine angezeigt werden.<br>4. Der Lagerhalter wählt einen Termin aus.<br>5. Der Lagerhalter klickt auf "Buchen".<br>6. Das System zeigt eine Meldung an: "Termin wurde erfolgreich gebucht." |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.E.2:
| Abschnitt | Beschreibung |
| --- | --- |
| Name |         Stellplatz suchen                             |
| Primärer Akteur |            Einlagerer |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |            Der Einlagerer sucht einen passenden Stellplatz          |
| Auslösendes Ereignis (Trigger) |                    Suchknopf drücken |
| Beschreibung |       Die Sucherergebnisse sollen die Anschrift des Standortes, zusammen mit dessen Merkmalen (z.B. Wachschutz, Klimatisierung, Anzahl freier Stellplätze etc.) und vor Ort angebotenen Services (Einschweißen, Glasbox) mit den entsprechenden Konditionen an.    |
| Beziehung zu anderen Use Cases |            ...             |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Der Einlagerer sucht einen passenden Stellplatz |
| Vorbedingung | Lagerhalter hat ein Konto |
| Nachbedingung | Der Einlagerer findet einen passenden Stellplatz für sein Fahrzeug |
| Hauptszenario | 1.Der Einlegerer geht in den Suchbereich.<br>2.Das System zeigt einen Dialog an.<br>3. Der Einlegerer klickt auf "Stellplatz Suchen".<br>4. Der Einlegerer klickt auf "Stadt" Dropdown Menü.<br>5.Das System zeigt eine Liste von Städten an.<br>6.Der Einlegerer wählt eine Stadt aus einer Liste aus.<br>6. Das System zeigt die verfügbaren Stellplätze an.<br> 7. Der Einlagerer wählt einen Stellplatz aus und drückt auf reservieren.<br>8. Das System zeigt eine Meldung "Stellplatz wurde erfolgreich reserviert". |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.E.3: 

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                Anfrage an Lagerhalter                    |
| Primärer Akteur |            Einlagerer           |
| Weitere Akteure |                 Lagerhalter                     |
| Stakeholder-Ziel(e) |          Die Einlagerer sollen Anfragen an Lagerhalter stellen können, um die Detailinformationen zum Standort zu erhalten und ein Angebot anfordern zu können.        |
| Auslösendes Ereignis (Trigger) |                 Anfrage an Lagerhalter schicken                   |
| Beschreibung |            Die Einlagerer stellen Anfragen an Lagerhalter, um die Detailinformationen zum Standort zu erhalten          |
| Beziehung zu anderen Use Cases |            ...         |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Einlagerer möchte eine Anfrage an Lagerhalter schicken |
| Vorbedingung | Lagerhalter hat ein Konto |
| Nachbedingung | Der Einlagerer stellt eine Anfrage an Lagerhalter |
| Hauptszenario | 1. Der Einlagerer klickt auf den Lagerhalter Bereich.<br>2. Das System öffnet den Lagerhalter Bereich.<br>3. Der Einlagerer klickt auf den Anfrage schicken.<br>4. Das System öffnet einen Dialog .<br>5. Der Einlagerer schreibt eine Nachricht an den Lagerhalter.<br>6. Der Einlagerer klickt auf "Absenden". |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.E.4:
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Einlagerungsangebot annehmen/ablehnen                   |
| Primärer Akteur |            Einlagerer            |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |            Die Einlagerer können ein Angebot annehmen oder ablehnen          |
| Auslösendes Ereignis (Trigger) |                 Knopf drücken                    |
| Beschreibung |            Die Einlagerer können ein Angebot annehmen oder ablehnen.        |
| Beziehung zu anderen Use Cases |           In Einlagerungsangebot anfordern inkludiert           |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Einlagerungsangebot annehmen/ablehnen. |
| Vorbedingung | Einlager hat ein Konto. |
| Nachbedingung | Die Einlagerer können ein Angebot annehmen oder ablehnen. |
| Hauptszenario | 1. Der Einlegerer klickt auf "Lagerhalter" Bereich.<br>2. Das System geht zum Lagerhalter Bereich.<br>3.Der Einlegerer klickt auf Angebote.<br>4.Das System zeigt die verfügbaren Angebote an.<br>5.Der Einlegerer klickt auf ein Angebot.
6.Das System zeigt 2 Buttons"Akzeptieren" und "Ablehnen" an.<br>7. Der Einlegerer klickt einer der beiden Optionen  an. |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.E.5:
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                Erzatzteile zu Fahrzeug suchen                     |
| Primärer Akteur |            Einlagerer             |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |            Erzatzteile für Fahrzeug suchen             |
| Auslösendes Ereignis (Trigger) |                 Suchworte eingeben und Knopf drücken                   |
| Beschreibung |   Die Einlagerer können Ersatz- und Zubehörteile zu ihrem Fahrzeug suchen, die von Ersatzteilhändlern angeboten werden.      |
| Beziehung zu anderen Use Cases |            ...             |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Einlagerer möchte Erzatzteile zu Fahrzeug suchen |
| Vorbedingung | Einlager hat ein Konto. |
| Nachbedingung | Der Einlager findet Ersatz- und Zubehörteile zu seinem Fahrzeug. |
| Hauptszenario | 1. Der Einleger geht in den Suchbereich.<br>3. Der Einlagerer klickt auf "Ersatzteil suchen".<br>4. Das System fragt den Einlagerer nach dem Fahrzeugtyp und der Stadt.<br>5. Der Einlagerer wählt den Fahrzeugtyp und die Stadt aus.<br>6. Das System zeigt die verfügbaren Artikel an.<br>7. Der Einlagerer wählt einen Artikel aus. |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.E.6:
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Termin vereinbaren                    |
| Primärer Akteur |            Einlagerer             |
| Weitere Akteure |                   Lagerhalter                 |
| Stakeholder-Ziel(e) |           Einlagerer   macht einen Termin   mit dem Lagerhalter aus           |
| Auslösendes Ereignis (Trigger) |                 Knopf drücken                    |
| Beschreibung |            Die Einlagerer können Termine für das Entgegennehmen und die Rückgabe ihres Fahrzeuges mit dem Lagerhalter vereinbaren            |
| Beziehung zu anderen Use Cases |            ...             |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Einlager drückt auf "Termin vereinbaren" |
| Vorbedingung | Einlagerer hat ein Konto |
| Nachbedingung | Einlagerer macht einen Termine für das Entgegennehmen und die Rückgabe ihres Fahrzeuges mit dem Lagerhalter aus. |
| Hauptszenario | 1. Der Einlagerer geht in den Lagerhalterbereich.<br>2. Das System öffnet Lagerhalterbereich.<br>3. Der  Einlagerer klickt "Termin buchen".<br>4. Das System öffnet einen Dialog.<br>5. Der Einlagerer gibt den Zweck des Termins an (z.B Fahrezug Annehmen oder Rücksenden).<br>6. Das System zeigt freie Termine an.<br>7. Der Einlagerer wählt einen Termin aus.<br>8. Der Einlagerer klickt auf "buchen".<br>9. Das System zeigt eine Meldung an “Termin wurde erfolgreich gebucht”. |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.E.7:
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Zusätzliches Angebot buchen                   |
| Primärer Akteur |            Einlagerer            |
| Weitere Akteure |                  ...             |
| Stakeholder-Ziel(e) |         Zusätzliche  angebotene Service von Lagerhalter buchen         |
| Auslösendes Ereignis (Trigger) |          Einlagerer können die vom Lagerhalter angebotenen Services  buchen            |
| Beschreibung |            Die Einlagerer können zusätzliche Services buchen, die vom Lagerhalter angeboten werden             |
| Beziehung zu anderen Use Cases |       ...        |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Einlager möchte zusätlisches Angebot buchen. |
| Vorbedingung | Einlager hat ein Konto |
| Nachbedingung | Die Einlager bucht ein zusätzlich Angebot. |
| Hauptszenario | 1. Der Einlagerer geht in den Lager Bereich.<br>2. Das System zeigt alle Informationen und Services an, die zum Lager gehören.<br>3. Der Einlagerer sucht sich eine Service aus und drückt "buchen" Button.<br>4. Das System benachrichtigt dem Lagerhalter über das Buchen der Service. |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.E.8:
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                    Ersatz- und Zubehörteile reservieren                  |
| Primärer Akteur |            Einlagerer             |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |            die angebotenen Ersatz- und Zubehörteile reservieren             |
| Auslösendes Ereignis (Trigger) |                 Knopf drücken                     |
| Beschreibung |             angebotene Ersatz- und Zubehörteile reservieren.     |
| Beziehung zu anderen Use Cases |            ...             |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Einlager möchte Ersatz- und Zubehörteile reservieren. |
| Vorbedingung | Einlagerer hat ein Konto |
| Nachbedingung | Einlagerer reserviert ein Ersetzteil. |
| Hauptszenario | ... |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>


### StR.W.1:
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Werkstatt Konto anlegen                     |
| Primärer Akteur |            Werkstatt              |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |             Registrierung der Werkstattinhabern        |
| Auslösendes Ereignis (Trigger) |                 Knopf drücken                     |
| Beschreibung |           Werkstattinhaber registriert sich und gibt Informationen über seine Werkstatt            |
| Beziehung zu anderen Use Cases |            In Werkstattservice anbieten  inkludiert           |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | ... |
| Vorbedingung | ... |
| Nachbedingung | ... |
| Hauptszenario | ... |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.W.2:

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Werkstattservice anbieten                    |
| Primärer Akteur |            Werkstatt            |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |            Werkstattinhaber können nach der Registrierung angeben, welche Arbeiten angeboten werden und ggf. auf welche Fahrzeughersteller sich der Werkstattinhaber spezialisiert hat.          |
| Auslösendes Ereignis (Trigger) |            Werkstattinhaber möchte eine Service anbieten |
| Beschreibung |            Werstatt gibt Welche Fahrzeughersteller sich spezialisiert  ein       und welche Arbeiten Angebot er nimmt ZB Kosten , Arbeitszeit usw. |      |
| Beziehung zu anderen Use Cases |            Werkstatt Konto anlegen             |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | ... |
| Vorbedingung | ... |
| Nachbedingung | ... |
| Hauptszenario | ... |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.EA.1:

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Ersatzteilhandler Konto anlegen                     |
| Primärer Akteur |            Ersatzteilhandler             |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |             Informationen zum Unternehmen einstellen.            |
| Auslösendes Ereignis (Trigger) |                 Button drücken                     |
| Beschreibung |            Informationen zum Unternehmen eingeben.             |
| Beziehung zu anderen Use Cases |            ...             |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | ... |
| Vorbedingung | ... |
| Nachbedingung | ... |
| Hauptszenario | ... |
| Alternativszenarien | ... |                      |
| Ausnahme szenarien | ... |
<hr>

### StR.EA.2: Kurzbeschreibung

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                   Ersatz- oder Zubehörteile verwalten                   |
| Primärer Akteur |            Ersatzteilhandler             |
| Weitere Akteure |                                      |
| Stakeholder-Ziel(e) |            Ersatz- oder Zubehörteile anbieten oder löschen             |
| Auslösendes Ereignis (Trigger) |                 Ersatz- oder Zubehörteile hinzufügen oder löschen                  |
| Beschreibung |            Verfügbare Ersatz- oder Zubehörteile anbieten und den angebotenen Artikel ggf. wieder löschen.          |
| Beziehung zu anderen Use Cases |                        |
<br>

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Ersatz- oder Zubehörteile verwalten. |
| Vorbedingung | Der Ersatzteilhandler hat ein Konto.|
| Nachbedingung |Der Ersatzteilhändler verwaltet seine Ersatz- oder Zubehörteile |
| Hauptszenario |1. Der Ersatzteilhändler klickt auf "Verwaltung".<br>2. Das System gibt den angebotenen Artikel zurück.<br>3. Der Ersatzteilhändler wählt den Artikel aus.<br>4. Der Ersatzteilhändler klickt auf "Löschen".<br>5. Das System löscht den Artikel von der Website.|
| Alternativszenarien |Fall für Bearbeiten<br>4b. Der Ersatzteilhändler klickt auf "edit".<br>5b. Das System gibt die Eintrag frei.<br>6b. Der Ersatzteilhändler gibt die neuen Informationen ein. und klickt auf "Speichern"<br>7b. Das System speichert die neuen Informationen. <br><br>Fall für angebot<br>3c. Der Ersatzteilhändler klickt auf "Hinzufügen".<br>4c. Das System gibt ein Formular aus.<br>5c. Der Ersatzteilhändler fühlt das Formular aus.<br>6c. Der Ersatzteilhändler klickt auf das Angebot.                     |
| Ausnahme szenarien |                       |

# Sequenzdaigramme



# Domänenmodell

![](Diagrams/out/domainmodel/domainmodel.svg)

# UI Erster Entwurf

![](Diagrams/unknown.png)
