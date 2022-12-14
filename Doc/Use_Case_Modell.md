
# Inhaltsverzeichnis

1. [Pflichtenhift](#pflichtenhift)
   1. [Use Case Diagramm](#usecase)
   2. [Anforderungsspezifikationenn](#anforderungen)<br>
           1. [StR.L.1](#str.l.1)<br>
           2. [StR.L.2](#str.l.2)<br>
           3. [StR.L.3](#str.l.3)<br>
           4. [StR.L.4](#str.l.4)<br>
           5. [StR.L.5](#str.l.5)<br>
           6. [StR.L.6](#str.l.6)<br>
           7. [StR.L.7](#str.l.7)<br>
           8. [StR.E.2](#str.e.2)<br>
           9. [StR.E.3](#str.e.3)<br>
           10. [StR.E.4](#str.e.4)<br>
           11. [StR.E.5](#str.e.5)<br>
           12. [StR.E.6](#str.e.6)<br>
           13. [StR.E.7](#str.e.7)<br>
           14. [StR.W.1](#str.w.1)<br>
           15. [StR.W.2](#str.w.2)<br>
           16. [StR.EA.1](#str.ea.1)<br>
           17. [StR.EA.2](#str.ea.2)<br>
   3. [Sequenzdaigramme](#sequenzdiagramme)<br>
          1. [StR.E.1](#str.e1)<br>
          2. [StR.E.7](#str.e7)<br>
          3. [StR.L.1](#str.l1)<br>
          4. [StR.L.2](#str.l2)<br>
          5. [StR.L.3](#str.l3)<br>
          6. [StR.L.4](#str.l4)<br>
          7. [StR.L.6](#str.l6)<br>
          8. [StR.L.7](#str.l7)<br>
          9. [StR.EA.7](#str.ea1)<br>
          10. [StR.W.1](#str.w1)<br>
          11. [StR.W.2](#str.w2)<br>
2. [OOD-Systementwurf](#ood_systementwurf)
    1. [Domänenmodell](#domainmodell)
    2. [UI Entwurf](#ui_entwurf)
    3. [Interaktionsdiagramm OOD](#interaktionendaigramm_ood)
           1. [Einlagerer Konto anlegen](#konto_anlegen)<br>
           3. [Termin vereinbaren](#termin_vereinbaren)<br>
           4. [Lagerhalter Konto anlegen](#lagerhalter_konto_anlegen)<br>
           5. [Einlagerungsservice anbieten](#einlagerungsservice_anbieten)<br>
           6. [Kapazitäten angebn](#kapazitäten_angebn)<br>
           7. [Spizailgebiet angeben](#spizailgebiet_angeben)<br>
3. [Another paragraph](#paragraph2)






## Pflichtenhift <a name="pflichtenhift"></a>

<br>

## Use Case Diagramm <a name="usecase"></a>

![](http://www.plantuml.com/plantuml/svg/XLRDRjms4BxhAQO-EK3NlGT143TrVs07BUAq1b8L1INDIgofaK6Ex5P5doMNFaDEkUsBTSYbH2qtw9u4pNppm_b_vLXP7djJVC4TzWYFkhAAk32uPU01h6uxXaPRh5aFL1Igvi72ZMhHTiemMb1k_Hi1LvgC9-xvwI-oxz3UYsbcuQQVMTPEYYT6RJf5ZOag0Z4IYiBxewWr2BzeOj7zMjdNGz-FfFal-BieHeUrSWXdi-sHMYSIM0rSagBjO1kqTEPrN-x9btHIQlELgWnsX54m12L9NTBMYXI1edLC0ZRo4lZzw7R_ycHqtU7Y0rHZtKNj-2TR5Ub9x1tQNXCyeaLTAHknLpTxUiAb45yFn4FfdJBOHlpTzLjijMEhqUBdf1pQHrrZ4AiqyYpt-v53_g6n53vdwURxlILScyf37AsvtDnjf2UfQ_MW9iqIEIG8cOdGryAeDUir-FO19wrCYrvbUOZ_LdLsmh5rlRBtQxz-yBNHAvzP9AXydDan6XC5FVye7RrcU9fZLyRqKCWFn304vAaIwzMI_XZeDwldU2yUZE89N2gJdpnXfTQws3q8qxWySornzUxM_oIPj_YWhEBHgbJ09QKAMZ__29kRti183RmVA-ns7srmf2IB8SKurslwp-LJuwU2MjVJLLvFkVMXGPkRbtGyASCn6KkD5KNiIhXucQO0F8SNBwJva9gNBuk5B9ZOy06WgJPZWu9OUa8GMMDboA8uF-G_WysldMuQfDysSBuAohF_HuQSdy34B9z0xLzq0XJZTGesXqfmS-Ek-8VpB8jJWYs3ydo9ww6Lp8CJCStAHU0qC4BORyDsReNdS1Q-5grO9EqS0X9t-vefgT4eVhcwirhafj6fliVGzS93GHEyaMxfbK4AvVyus99-j0oniv6GbcbsSNReH4mdY1VVQ8JW2MWdkccqiDrzij3Wo4x89NrdXzq79mEmOOH-zx7r2oHJc3qQ_FDKpt0msagQnXv-9a4HTZrILE9N_jwjsL_lsNJnzONVu-B44-hT1oJnAKrHTBdmJHRunGaVbGRJKK3kovBMm_1-42aIOhG_eTvdmGSshDKA6qsjO8-TJcl06xpJ_gH1Wp8b_R95q0HFQ7ogHU6rOcm7gp44EJqc30mXjPMou3GrkPLiUNXJb-CsQbwuUsP9wsl9xLUITXej-oJdgdsEl3wl92wVkbDRzcKbCrbP3WkJ5JK-Z2NzWP8GerkaLJQoWeWzvGiCMGdwk11klSR1CinpFLCnNnYYuuguHK6GwdeiAGpSjxjFzNshAfImeYPq1yuK_nJ5mNY3pMPz5PxFsdD6R8sC6f-JKMClPzJrrCbOnJenmefgS_9QGyuxseOP86tnZ9wrHywUMo-Zf_BEENb9vcnVLZajtYGvDXsJHJe1XBpCuqFoSGWIUssaoAQICBEhFksPOzuhf6RipNy0)

<hr>


## Anforderungsspezifikationenn <a name="anforderungen"></a>
#### Hier werden alle Anforderungsspezifikationenn von Stakholder analysiert

### StR.L.1 <a name="str.l.1"></a>

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
| Hauptszenario |1. Der Lagerhalter klickt auf " registrieren".<br>2. Das System zeigt die Registrierungsseite an.<br>3. Der Lagerhalter gibt seine E-Mail-Adresse und sein Passwort ein.<br>4. Das System verifiziert die Eingaben.<br>Das System legt ein Lagerkonto an.<br>6. Die Profilseite wird geöffnet.<br>7. Der Lagerhalter gibt seine Daten ein.<br>8. Der Lagerhalter drückt auf die Schaltfläche "Speichern".|
| Alternativszenarien |                      |
| Ausnahme szenarien |4a. Die E-Mail wurde bereits registriert.<br>5. Das System zeigt die Meldung "Ihre E-Mail ist bereits registriert" an.|

<hr>

### StR.L.2  <a name="str.l.2"></a>

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
| Hauptszenario |1. Lagerhalter geht auf den "Lagerbereich".<br>2. Das System zeigt eine Ansicht.<br>3. Der Lagerhalter klickt auf "Service anbieten".<br>4. Das System zeigt ein Formular an.<br>5. Der Lagerhalter gibt einen Servicenamen und die Beschreibung der service ein.<br>6. Der Lagerhalter bestätigt seine Eingabe.<br>7. Das System verknüpft die angebotene Dienstleistung mit dem Profil des Lagerhalters.|
| Alternativszenarien |                      |
| Ausnahme szenarien |  ...  |

<hr>

### StR.L.3: <a name="str.l.3"></a>

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
| Hauptszenario |1. Lagerhalter geht auf den "Lagerbereich".<br/>2. Das System zeigt eine Ansicht.<br/>3. Lagerhalter klickt auf "Kapazitätsbereich"<br>4.  Lagerhalter drückt auf Bearbeiten<br>5. Das System zeigt im Dialog alle Kapazitäten an<br>6. Der Lagerhalter gibt die Kapazitäten und die Kategorien ein.<br>7. Der Lagerhalter klickt auf speichern<br>8. Das System zeigt die Kapazitäten an.|
| Alternativszenarien |                      |
| Ausnahme szenarien |...|

<hr>

### StR.L.4: <a name="str.l.4"></a>

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
| Hauptszenario | 1. Lagerhalter geht auf den "Lagerbereich".<br/>2. Das System zeigt eine Ansicht.<br/>3. Der Lagerhalter klickt auf  "Spezialgebiet"<br>4. Der Lagerhalter klickt auf "Bearbeiten"<br>5. Das System zeigt eine Liste mit allen Spezialgebieten an<br>6. Der Lagerhalter wählt aus der Liste aus, auf welche Automarken er spezialisiert ist<br>7. Der Lagerhalter klickt auf Speichern<br>8. Das System zeigt die Spezialitäten an. |
| Alternativszenarien | ... |
| Ausnahme szenarien |...|

<hr>

### StR.L.5: <a name="str.l.5"></a>

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Informationen bereitstellen |
| Primärer Akteur |            Lagerhalter             |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |             Informationen über die Fahrbereitschaft des jeweiligen Fahrzeuges zur Verfügung stellen            |
| Auslösendes Ereignis (Trigger) |                 Lagerhalter möchte Informationen über die Fahrbereitschaft  angeben/aktualisieren                   |
| Beschreibung |            aktuelle Informationen über  den Wartungsstand des jeweiligen Fahrzeuges sollen bereitgestellt             |
| Beziehung zu anderen Use Cases |            ...             |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Lagerhalter möchte Informationen über die Fahrbereitschaft angeben/aktuallisieren |
| Vorbedingung | Lagerhalter hat ein Konto |
| Nachbedingung | Fahrbereitschaft wird angezeigt |
| Hauptszenario | 1. Der Lagerhalter Klickt auf den bereich"Fahrzeug" .<br>2. das System zeigt dem Lagerhalter eine Tabellenansicht samt Informationen über die eingelagerten Auto.<br>3. Der Lagerhalter wählt ein Auto.<br>4. Der Lagerhalter drückt auf "Bearbeiten".<br>5. Das System öffnet einen Dialog zum Bearbeiten.<br>6. Der Lagerhalter bearbeitet die Fahrbereitschaft.<br>7. Der Lagerhalter klickt auf "speichern". |
| Alternativszenarien | ... |
| Ausnahme szenarien | ... |
<hr>

### StR.L.6 :  <a name="str.l.6"></a>
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Reparaturanfragen an Werkstätten einstellen |
| Primärer Akteur |            Lagerhalter             |
| Weitere Akteure |                  Werkstatt                 |
| Stakeholder-Ziel(e) |      Die Lagerhalter können Anfragen zu Reparaturen und Wartungsarbeiten einstellen.      |
| Auslösendes Ereignis (Trigger) |              Knopf drücken                  |
| Beschreibung |             Die Lagerhalter können Anfragen zu Reparaturen und Wartungsarbeiten an registrierte Werkstätten in der Nähe einstellen.            |
| Beziehung zu anderen Use Cases |           ...          |

| Auslösendes Ereignis | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Der Lagerhalter möchte eine Reparaturanfrage an Werkstatt einstellen |
| Vorbedingung | Lagerhalter hat ein Konto |
| Nachbedingung | Lagerhalter hat die passende Werkstatt |
|gefunden und ein Reparaturanfragen||
|eingestellt ||
| Hauptszenario | 1. Der Lagerhalter klickt auf den  Bereich "Werkstätte" .<br>2. Der Lagerhalter wählt eine Werkstatt aus.<br>3. Das System öffnet die Seite von der gewählten Werkstatt.<br>4. Lagerhalter klickt auf "Reparaturanfrage einstellen".<br>5. Das System öffnet einen Dialog<br>6. Lagerhalter schreibt eine Anfrage<br>7. Der Lagerhalter klickt auf "Absenden".<br>8. Das System zeigt die Meldung "Reparaturauftrag wurde gestellt" an|
| ||
| Alternativszenarien | ... |
| Ausnahme szenarien | ... |
<hr>

### StR.L.7:  <a name="str.l.7"></a>

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
| Hauptszenario | 1. Der Lagerhalter klickt auf den  Bereich "Werkstätte" .<br/>2. Der Lagerhalter wählt eine Werkstatt aus.<br>3. Der Lagerhalter klickt auf "Termin buchen".<br>4. Das System öffnet einen Dialog mit einem Kalender, in dem die verfügbaren Termine angezeigt werden.<br>5. Der Lagerhalter wählt einen Termin aus.<br>6. Der Lagerhalter klickt auf "Buchen".<br>7. Das System zeigt eine Meldung an: "Termin wurde erfolgreich gebucht." |
| Alternativszenarien | ... |
| Ausnahme szenarien | ... |
<hr>

### StR.E.2:  <a name="str.e.2"></a>
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
| Hauptszenario | 1. Der Einlagerer geht in den "Suchbereich".<br>2. Das System zeigt eine Ansicht an.<br>3. Der Einlagerer klickt auf "Stellplatz Suchen".<br>4. Der Einlagerer klickt auf "Stadt" Dropdown Menü.<br>5. Das System zeigt eine Liste von Städten an.<br>6. Der Einlagerer wählt eine Stadt aus einer Liste aus.<br>6. Das System zeigt die verfügbaren Stellplätze an.<br> 7. Der Einlagerer wählt einen Stellplatz aus und drückt auf reservieren.<br>8. Das System zeigt eine Meldung "Stellplatz wurde erfolgreich reserviert". |
| Alternativszenarien | ... |
| Ausnahme szenarien | ... |
<hr>

### StR.E.3: <a name="str.e.3"></a>

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
| Hauptszenario | 1. Der Einlagerer klickt auf den "Lager" Bereich.<br>2. Das System zeigt eine Ansicht.<br/>3. Der Einlagerer klickt auf den "Anfrage schicken".<br>4. Das System öffnet einen Dialog .<br>5. Der Einlagerer schreibt eine Nachricht an den Lagerhalter.<br>6. Der Einlagerer klickt auf "Absenden". |
| Alternativszenarien | ... |
| Ausnahme szenarien | ... |
<hr>

### StR.E.4:  <a name="str.e.4"></a>
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
| Vorbedingung | Einlagerer hat ein Konto. |
| Nachbedingung | Die Einlagerer können ein Angebot annehmen oder ablehnen. |
| Hauptszenario | 1. Der Einlagerer klickt auf den "Lager" Bereich.<br/>2. Das System zeigt eine Ansicht.<br/>3. Der Einlagerer klickt auf Angebote.<br>4. Das System zeigt die verfügbaren Angebote an.<br>5. Der Einlegerer klickt auf ein "Angebot".<br>6. Das System zeigt 2 Buttons"Akzeptieren" und "Ablehnen" an.<br/> 7. Der Einlagerer klickt einer der beiden Optionen  an. |
| ||
| Alternativszenarien | ... |
| Ausnahme szenarien | ... |
<hr>

### StR.E.5:  <a name="str.e.5"></a>
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
| Hauptszenario | 1. Der Einlagerer klickt auf den "suche" Bereich.<br/>2. Das System zeigt eine Ansicht.<br/>3. Der Einlagerer klickt auf "Ersatzteil suchen".<br>4. Das System fragt den Einlagerer nach dem Fahrzeugtyp und der Stadt.<br>5. Der Einlagerer wählt den Fahrzeugtyp und die Stadt aus.<br>6. Das System zeigt die verfügbaren Artikel an.<br>7. Der Einlagerer wählt einen Artikel aus. |
| Alternativszenarien | ... |
| Ausnahme szenarien | ... |
<hr>

### StR.E.6:   <a name="str.e.6"></a>
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
| Hauptszenario | 1. Der Einlagerer klickt auf den "Lager" Bereich.<br/>2. Das System zeigt eine Ansicht.<br/>3. Der  Einlagerer klickt "Termin buchen".<br>4. Das System öffnet einen Dialog.<br>5. Der Einlagerer gibt den Zweck des Termins an (z.B Fahrzeug Annehmen oder Rücksenden).<br>6. Das System zeigt freie Termine an.<br>7. Der Einlagerer wählt einen Termin aus.<br>8. Der Einlagerer klickt auf "buchen".<br>9. Das System zeigt eine Meldung an “Termin wurde erfolgreich gebucht”. |
| Alternativszenarien | ... |
| Ausnahme szenarien | ... |
<hr>

### StR.E.7:  <a name="str.e.7"></a>
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
| Nachbedingung | Der Einlagerer bucht ein zusätzliches Angebot. |
| Hauptszenario | 1. Der Einlagerer klickt auf den "Lager" Bereich.<br/>2. Das System zeigt eine Ansicht.<br/>3. Das System zeigt alle Informationen und Services an, die zum Lager gehören.<br>4. Der Einlagerer sucht sich eine Service aus und drückt "buchen" Button.<br>5. Das System benachrichtigt dem Lagerhalter über das Buchen der Service. |
| Alternativszenarien | ... |
| Ausnahme szenarien | ... |
<hr>


### StR.W.1:  <a name="str.w.1"></a>
| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Werkstatt Konto anlegen                     |
| Primärer Akteur |            Werkstatt              |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |             Registrierung der Werkstattinhabern        |
| Auslösendes Ereignis (Trigger) |                 Knopf drücken                     |
| Beschreibung |           Werkstattinhaber registriert sich und gibt Informationen über seine Werkstatt            |
| Beziehung zu anderen Use Cases |           Werkstatt Konto anlegen           |

| Abschitt | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Werkstatt Konto anlegen |
| Vorbedingung | Die Werkstatt hat eine valide E-mail Adresse . |
| Nachbedingung | Die Werkstatt ist im System registriert |
| Hauptszenario | 1. Der Werkstatt geht auf die Registrierungsseite.<br/>2. Die Werkstatt gibt ihre E-mail Adresse und ihr Passwort ein.<br/>3. Die Werkstatt klickt auf "Registrieren".<br/>4. Das System überprüft die Eingaben.<br/>5. Das System erstellt ein Konto für die Werkstatt.<br/>6. Die Profilseite öffnet sich.<br/>7. Der Werkstatt gibt seine Daten ein.<br/>8. Der Werkstatt klickt auf die Schaltfläche "Speichern" |
| Alternativszenarien | ... |
| Ausnahme szenarien | 4a. Die E-mail wurde bereits registriert.<br/>5a. Das System zeigt die Nachricht" Ihr Email ist schon angemeldet"<br/>an. |
<hr>

### StR.W.2:  <a name="str.w.2"></a>

| Abschnitt | Beschreibung |
| --- | --- |
| Name |                 Werkstattservice anbieten                    |
| Primärer Akteur |            Werkstatt            |
| Weitere Akteure |                 ...                     |
| Stakeholder-Ziel(e) |            Werkstattinhaber können nach der Registrierung angeben, welche Arbeiten angeboten werden und ggf. auf welche Fahrzeughersteller sich der Werkstattinhaber spezialisiert hat.          |
| Auslösendes Ereignis (Trigger) |            Werkstattinhaber möchte eine Service anbieten |
| Beschreibung |            Werstatt gibt Welche Fahrzeughersteller sich spezialisiert  ein  und welche Arbeiten Angebot er nimmt ZB Kosten , Arbeitszeit usw. |
| Beziehung zu anderen Use Cases |            Werkstatt Konto anlegen             |

| Abschnitt | Inhalt |
| --- | --- |
| Auslösendes Ereignis  | Werkstattinhaber Service anbieten. |
| Vorbedingung | Der Werkstattinhaber hat ein Konto. |
| Nachbedingung | Die Werkstatt erbringt ihren Service. |
| Hauptszenario | 1. Der Werkstattinhaber klickt auf "Service anbieten".<br/>2. Das System zeigt ein Formular an.<br/>3. Der Werkstattinhaber gibt einen Servicenamen und die Beschreibung der service ein.<br/>4. Der Werkstattinhaber bestätigt seine Eingabe.<br/>5. Das System verknüpft die angebotene Service mit dem Profil des Lagerhalters. |
| Alternativszenarien | ... |
| Ausnahme szenarien |  |
<hr>

### StR.EA.1:  <a name="str.ea.1"></a>

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
| Auslösendes Ereignis  | Ersatzteilhandler Konto anlegen . |
| Vorbedingung | Der Ersatzteilhandler hat eine valide E-mail Adresse . |
| Nachbedingung | Der Ersatzteilhandler registriert sich im System |
| Hauptszenario | 1. Der Ersatzteilhandler geht auf die Registrierungsseite..<br/>2. Der Ersatzteilhandler gibt seine E-Mail-Adresse und sein Passwort<br/>ein.<br/>3. Der Ersatzteilhandler klickt auf "Registrieren".<br/>4. Das System überprüft die Eingaben.<br/>5. Das System erstellt ein Konto für den Ersatzteilhandler.<br/>6. Die Profilseite öffnet sich.<br/>7. Der Ersatzteilhandler gibt seine Daten ein.<br/>8. Der Ersatzteilhandler drückt auf die Schaltfläche "Speichern |
| Alternativszenarien | ... |
| Ausnahme szenarien | 4a. Die E-mail wurde bereits registriert.<br/>5a. Das System zeigt die Nachricht" Ihr Email ist schon angemeldet"<br/>an. |
<hr>

### StR.EA.2:  <a name="str.ea.2"></a>

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

## Sequenzdaigramme <a name="sequenzdiagramme"></a>
### Nun werden die Use Case nur auf die folgendnen Sequenzdaigramme beschränkt
 
### StR.E.1   <a name="str.e1"></a>
 Stellplatz suchen 
 <br>
![](Diagrams/Sequenzdiagramme/E1.png)
<br>
### StR.E.7  <a name="str.e7"></a>
 Zusätzliches Angebot buchen 
 <br>
![](Diagrams/Sequenzdiagramme/E6.png)
<br>
### StR.L.1   <a name="str.l1"></a>
Lagerhalter Konto anlegen
<br>
![](Diagrams/Sequenzdiagramme/L1.png)
<br>
### StR.L2   <a name="str.l2"></a>
Einlagerungsservices anbieten
<br>
![](Diagrams/Sequenzdiagramme/L2.png)
<br>
### StR.L3   <a name="str.l3"></a>
Kapazitäten angeben
<br>
![](Diagrams/Sequenzdiagramme/L3.png)
<br>
### StR.L4   <a name="str.l4"></a>
Spezialgebiet angeben
<br>
![](Diagrams/Sequenzdiagramme/L4.png)
<br>
### StR.L6   <a name="str.l6"></a>
Reparaturanfragen an Werkstätten einstellen
<br>
![](Diagrams/Sequenzdiagramme/L6.png)
<br>
### StR.L7  <a name="str.l7"></a>
Termin mit Werkstatt vereinbaren
<br>
![](Diagrams/Sequenzdiagramme/L7.png)
<br>
### StR.EA.1   <a name="str.ea1"></a>
Ersatzteilhandler Konto anlegen
<br>
![](Diagrams/Sequenzdiagramme/StR_EA_1.png)
<br>
### StR.W.1   <a name="str.w1"></a>
Werkstatt Konto anlegen
<br>
![](Diagrams/Sequenzdiagramme/StR_W_1.png)
<br>
### StR.W.2     <a name="str.w2"></a>
Werkstattservice anbieten
<br>
![](Diagrams/Sequenzdiagramme/StR_W2.png)

## OOD-Systementwurf <a name="ood_systementwurf"></a>

### Domänenmodell <a name="domainmodell"></a>

![](Diagrams/out/domainmodel/domainmodell.png)

### UI Entwurf <a name="ui_entwurf"></a>
### Im UI Entwurf beschränken wir auf die Use Case, auf sie sich die Lagerhalter und Einlagerer Akturen beziehen

![](UI/VintageCarCommunity1.jpg)
<br>
![](UI/VintageCarCommunity2.jpg)
<br>
![](UI/VintageCarCommunity3.jpg)
<br>
![](UI/VintageCarCommunity4.jpg)
<br>
![](UI/VintageCarCommunity5.jpg)
<br>
![](UI/VintageCarCommunity6.jpg)
<br>
![](UI/VintageCarCommunity7.jpg)
<br>




## Interaktionsdiagramm OOD <a name="interaktionendaigramm_ood"></a>
### In diesem Phase beschränken wir weiter auf die folgenden Use Case Diagramme

### Einlagerer Konto anlegen <a name="konto_anlegen"></a>
![](Diagrams/Sequenzdiagramme/E_Konto_anlegen.jpeg)
<br>

### Termin vereinbaren <a name="termin_vereinbaren"></a>
![](Diagrams/Sequenzdiagramme/Termin_vereinbaren.jpeg)
<br>

#### Lagerhalter Konto anlegen  <a name="lagerhalter_konto_anlegen"></a>
![](Diagrams/Sequenzdiagramme/L_Konto_anlegen.jpeg)
<br>

#### Einlagerungsservice anbieten   <a name="einlagerungsservice_anbieten"></a>
![](Diagrams/Sequenzdiagramme/Einlagerungsgebiet.jpeg)
<br>

#### Kapazitäten angebn   <a name="kapazitäten_angebn"></a>
![](Diagrams/Sequenzdiagramme/Kapazität_angeben.jpeg)
<br>

#### Spizailgebiet angeben    <a name="spizailgebiet_angeben"></a>
![](Diagrams/Sequenzdiagramme/spitailgebiet.jpeg)




