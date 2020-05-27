## ------- Skribbl Typo Addon -------

(Tipp: Zum Testen von Funktionen auf das Fragezeichen auf der Skribbl-Seite klicken!)

### Funktionen:

*   #### Kommandoeingabe

    Um die verschiedenen Funktionen zu aktivieren, kannst du im Chat Kommandos eingeben.  
    Dazu gibst du einfach den Befehl und am Ende "--" ein, zum Beispiel "help--".  
    Enter musst du nicht dr�cken.  
    Fast alle Funktionen k�nnen aber auch �ber das Popup eingestellt werden  

*   #### Zur�ck-Button

    Wenn du zum Beispiel falsch gef�llt hast, kannst du deine Aktionen auf der Leinwand mit dem Zur�ck-Button in der Werkzeugleiste r�ckg�ngig machen.  
    Dabei wird das ganze Bild neu gezeichnet, was etwa zwischen 1 und 5 Sekunden dauern kann. Die Funktion ist also eher f�r ... "Notf�lle".  

    ##### Aktivieren: "enable back--"  
    Deaktivieren: "disable back--"

*   #### Zufallsfarbe

    Wenn du auf den W�rfel neben der Farbpalette klickst, wird in einem festgelegten Intervall zwischen 10 und 500 Millisekunden die Farbe des Pinsels zuf�llig ge�ndert.  
    Dadurch entstehen bunte Striche - f�r normale Farben einfach wieder eine Farbe ausw�hlen.  
    (Den Hintergrund schnell zu ver�ndern sieht zwar lustig aus, aber kann nerven!)  

    ##### Aktivieren: "enable random--"  
    Deaktivieren: "disable random--"  
    Intervall festlegen: "set random 100--"

*   #### ImageAgent

    Wenn du an der Reihe zu zeichnen bist und ein Wort gew�hlt hast, erscheinen �ber dem Chat neue Buttons.  
    Indem du auf "Logo", "Karte" oder "Flagge" klickst, wird eine Internet-Suche nach dem Wort und dem Thema durchgef�hrt.  
    Das erste Bild aus den Suchergebnissen wird dann direkt in Skribbl als kleine Vorlage unter den Buttons angezeigt.  
    Wenn du auf das Bild klickst, wird das n�chste Bild aus den Suchergebnissen angezeigt.  

    Mit "Begriff" wird nur nach dem Begriff gesucht (zB "Italien" statt "Italien Karte").  
    Durch "Eingabe" �ffnet sich ein Eingabefeld, in dem du einen eigenen Suchbegriff eingeben kannst (zB "Europakarte").  
    Mit Enter wird die Suche durchgef�hrt.  

    Die Buttons und das Bild werden automatisch entfernt, wenn du mit Zeichnen fertig bist.

    ##### Aktivieren: "enable agent--"  
    Deaktivieren: "disable agent--"

*   #### Nachrichten-Markierungen

    Deine Nachrichten im Chat k�nnen farbig hervorgehoben werden.  

    ##### Aktivieren: "enable markup--"  
    Deaktivieren: "disable markup--"  
    Farbe �ndern: "set markup #ffffff--"

    '#ffffff' steht f�r den Hex-Code der Farbe. Dieser muss aus 6 Stellen bestehen.  
    Du kannst auch andere Personen farbig hervorheben. 'name' steht f�r den Namen des Spielers.

    ##### Namen hinzuf�gen: "add vip name--"  
    Namen l�schen: "rem vip name--"  
    Namen anzeigen: "show vip--"  
    Alle Namen l�schen: "clear vip--"

*   #### Tablet-Druckempfindlichkeit

    Eingabestifte, die Druckempfindlich sind, k�nnen die Pinselst�rke je nach Druck setzen.  
    Dazu muss dein Stift / Tablet Windows Ink aktiviert haben.  
    Du kannst du Empfindlichkeit von 1 (niedrig) bis 100 (sehr hoch) verstellen.  
    F�r genauere Einstellungen verwende deinen Tablet-Driver.  

    ##### Aktivieren: "enable ink--"  
    Deaktivieren: "disable ink--"  
    Empfindlichkeit: "set sens 3--"

    Au�erdem kannst du mit den Tasten a und s die Pinselst�rke verstellen (7 Stufen). Mit q und w sind die Spr�nge gr��er.
*   #### Eingabe-�berpr�fung

    Du kannst �berpr�fen lassen, ob deine Eingabe im Textfeld zu der L�nge des gesuchten Wortes und den bekannten Buchstaben passen.  

    ##### �berpr�fung aktivieren: "enable charbar--"  
    �berpr�fung deaktivieren: "disable charbar--"

    In dem Feld unter dem Eingabefeld wird mit der Zahl signalisiert, wie viele Buchstaben noch fehlen / zu viel sind  
    Die Farbe zeigt an, ob die Eingabe zu den bekannten Buchstaben passt oder schon zu lange ist.
*   #### Heiligenschein

    Nutzloses Feature. Hol dir einen Ego-Boost.

    ##### Heiligenschein aktivieren: "enable holy--"  
    Heiligenschein deaktivieren: "disable holy--"

*   #### Navigationsbuttons

    Verlasse oder �berspringe die aktuelle Lobby durch Klicken auf die Buttons oben rechts.
*   #### Eingabe leeren

    Durch Dr�cken von "++" im Eingabefenster wird deine aktuelle Eingabe geleert.  
    Du kannst die Kombination (Token) auch �ndern, zB zu "#".  
    ACHTUNG: Wenn das Token ein Buchstabe aus "set token" ist, bist du verloren. F�r immer.  

    ##### Token �ndern: "set token #--"

    Mit ESCAPE wird au�erdem die aktuelle Zeichnung gel�scht.