# Anforderungsspezifikationen

### StR.L.1: Kurzbeschreibung

| Abschnitt | Beschreibung |
| --- | --- |
| Name |               Lagerhalter  Konto anlegen                |
| Primärer Akteur |            Lagerhalter             |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |           Konto anlegen, Ort des Einlagerns, Kosten für der Einlagerung, Servicezeiten und Lagerungbedigungen eingeben             |
| Auslösendes Ereignis (Trigger) |                 Lagerhalter möchte sich registerieren                     |
| Beschreibung |            Registrieren von dem Lagerhalter, dazu Ort des Einlagerns, Kosten für die Einlagerung Servicezeiten und Lagerbedigungen (z.B. beheizt, UV-geschutzt, Klimatisiert, 24h Zugang, Wachschutz) eingeben             |
| Beziehung zu anderen Use Cases |            ...           |
<br>

### StR.L.1: Detailbeschreibung

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Der Lagerhalter möchte sich registrieren |
| Vorbedingung | Der Lagerhalter hat eine gültige E-Mail Adresse|
| Nachbedingung |Der Lagerhalter hat ein Konto erstellt.|
| Hauptszenario |1. Der Lagerhalter geht auf die Registrierungsseite.<br>2. Das System zeigt die Registrierungsseite an.<br>3. Der Lagerhalter gibt seine E-Mail-Adresse und sein Passwort ein.<br>4. Das System verifiziert die Eingaben.<br>Das System legt ein Lagerkonto an.<br>6. Die Profilseite wird geöffnet.<br>7. Der Lagerverwalter gibt seine Daten ein.<br>8. Der Lagerhalter drückt auf die Schaltfläche "Speichern".|
| Alternativszenarien |                      |
| Ausnahme szenarien |4a. Die E-Mail wurde bereits registriert.<br>5. Das System zeigt die Meldung "Ihre E-Mail ist bereits registriert" an.|

<hr>

### StR.L.2: Kurzbeschreibung

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

### StR.L.2: Detailbeschreibung

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Der Lagerhalter möchte eine Dienstleistung anbieten. |
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

<hr>

### StR.E.7:
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 zusätzliches Angebot buchen                   |
| Primärer Akteur |            Einlagerer            |
| Weitere Akteure |                  ...             |
| Stakeholder-Ziel(e) |         Zusätzliche  angebotene Service von Lagerhalter buchen         |
| Auslösendes Ereignis (Trigger) |          Einlagerer können die vom Lagerhalter angebotenen Services  buchen            |
| Beschreibung |            Die Einlagerer können zusätzliche Services buchen, die vom Lagerhalter angeboten werden             |
| Beziehung zu anderen Use Cases |       ...        |


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

<hr>

### StR.EA.2: 
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                   Ersatz- oder Zubehörteile verwalten                   |
| Primärer Akteur |            Ersatzteilhandler             |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |            Ersatz- oder Zubehörteile anbieten oder löschen             |
| Auslösendes Ereignis (Trigger) |                 Ersatz- oder Zubehörteile hinzufügen oder löschen                  |
| Beschreibung |            Verfügbare Ersatz- oder Zubehörteile anbieten und den angebotenen Artikel ggf. wieder löschen.          |
| Beziehung zu anderen Use Cases |            ...             |

