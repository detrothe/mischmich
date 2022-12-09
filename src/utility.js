export function testeZahl(wert) {

    /* damit der Anwender sowohl ein Dezimalkomma als auch einen Dezimalpunkt eingeben kann.
       Javascript erfordert aber einen Dezimalpunkt
    */
    wert = wert.replace(/,/g, '.');
    //console.log('Komma entfernt',wert);
    if (isNaN(wert)) {
        //window.alert("Das ist keine Zahl ");

        return 0;    // falsche Eingabewerte werden als 0 zurückgegeben
    }
    return wert;
}

//------------------------------------------------------------------------------------------------

export function testeZahl_default(wert, defaultWert) {

    /* damit der Anwender sowohl ein Dezimalkomma als auch einen Dezimalpunkt eingeben kann.
       Javascript erfordert aber einen Dezimalpunkt
    */
    wert = wert.replace(/,/g, '.');
    //console.log('Komma entfernt',wert);
    if (isNaN(wert)) {
        //window.alert("Das ist keine Zahl ");

        return defaultWert;
    }
    return wert;
}

//------------------------------------------------------------------------------------------------


export function testNumber(wert, zeile, spalte, id) {
    wert = wert.replace(/,/g, '.');
    //console.log('Komma entfernt',wert);
    if (isNaN(wert)) {
        //window.alert("Das ist keine Zahl ");

        //const objCells = document.getElementById(id).rows.item(zeile).cells;
        //objCells.item(spalte).style.backgroundColor = "darkred";
        //objCells.item(spalte).style.color = "white";

        document.getElementById(id).rows.item(zeile).cells.item(spalte).classList.add("selected");
        return 0;
    }
    return wert;
}

//------------------------------------------------------------------------------------------------

export function sichtbar(displayName) {

    if (displayName === 'mischmich') {
        document.getElementById("mischmich").style.display = "block";
    } else {
        document.getElementById("mischmich").style.display = "none";
    }

    if (displayName === 'kdtabelle') {
        document.getElementById("kdTabelle").style.display = "block";
    } else {
        document.getElementById("kdTabelle").style.display = "none";
    }

}
