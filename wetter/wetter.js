// Navigation back to MainPage
document.getElementById("closeBtn").addEventListener("click", () => {
    location.href = "../index.html";
});

// Funktion für die Stützpunkte
document.getElementById("auswahlAsc").addEventListener("change", (event) => {
    let auswahl = event.target.value;
    console.log(`Auswahl ASC: ${auswahl}`);

    // Stützpunkte zum jeweiligen ASC als Objekt
    let stuetzpunkteImAsc = {
        Spittal: ["Lienz", "Mallnitz", "Spittal"],
        Villach: ["Fürnitz", "VillachSued", "Villach"],
        Klagenfurt: ["Friesach", "St.Paul", "Klagenfurt"],
    };

    try {
        if (auswahl == "Spittal" || auswahl == "Villach" || auswahl == "Klagenfurt") {
            // Nur wenn das erfüllt ist soll das <label> & <select> angezeigt werden
            let labelStuetzpunkt = document.getElementById("labelStuetzpunkt");
            labelStuetzpunkt.style.display = "flex";
            let auswahlStuetzpunkt = document.getElementById("auswahlStuetzpunkt");
            auswahlStuetzpunkt.style.display = "flex";
            auswahlStuetzpunkt.innerHTML = "";

            // Eine Placeholder Funktion hinzufügen
            let emptyOption = document.createElement("option");
            emptyOption.text = "Stützpunkt auswählen";
            emptyOption.value = "";
            emptyOption.className = "option";
            auswahlStuetzpunkt.appendChild(emptyOption);

            // auswahl in einer neuen Variable speichern um die forEach Methode anwenden zu können
            let stuetzpunkte = stuetzpunkteImAsc[auswahl];
            // Das <select> referenzieren

            stuetzpunkte.forEach((stuetzpunkt) => {
                // in jedem Durchlauf der for schleife soll ein neues element erzeugt werden
                let newOption = document.createElement("option");
                // Dann soll noch bei jedem Durchlauf dem newOption Element ein text gegeben werden
                newOption.textContent = stuetzpunkt;
                // geben einer ID
                newOption.id = stuetzpunkt;
                // geben einer Klasse
                newOption.className = "option";
                // hinzufügen zu der Liste
                auswahlStuetzpunkt.appendChild(newOption);
            });
        } else if (auswahl === "") {
            labelStuetzpunkt.style.display = "none";
            auswahlStuetzpunkt.style.display = "none";
            auswahlStuetzpunkt.innerHTML = "";
        }
    } catch (error) {
        console.error("Error in ASC selection: " + error);
    }
});

// Funktion für die Bahnhöfe
document.getElementById("auswahlStuetzpunkt").addEventListener("change", (event) => {
    let auswahl = event.target.value;
    console.log(`Stützpunkt: ${auswahl}`);
    // Bauen des Objektes KEY = Stützpunkt / VALUE = Bahnhöfe des Stützpunktes
    let bahnhöfe = {
        Spittal: ["Gummern", "Feistritz", "Rothenthurn", "Spittal"],
        Lienz: [
            "Sillian",
            "Abfaltersbach",
            "Thal",
            "Lienz",
            "Dölsach",
            "Oberdrauburg",
            "Dellach",
            "Greifenburg",
            "Steinfeld",
            "Kleblach",
            "Möllbrücke",
            "Pusarnitz",
        ],
        Mallnitz: ["Böckstein", "Mallnitz", "Penk", "Kolbnitz", "Mühldorf", "Pusarnitz", "Spittal"],
        Fürnitz: ["Hermagor", "Nötsch"],
        VillachSued: ["Fürnitz", "Neuhaus"],
        Villach: ["Velden", "Villach"],
        Klagenfurt: ["Viktring", "Klagenfurt"],
        Friesach: ["Unzmarkt", "Friesach"],
        StPaul: ["St.Paul", "Weststeiermark"],
    };
    // Wenn die auswahl ein stützpunkt ist dann weiter
    // Alle Keys der Liste
    keys = Object.keys(bahnhöfe);
    // Nur wenn die Auswahl auch vorhanden ist soll soll das neue <select> erzeugt werden
    try {
        if (keys.includes(auswahl)) {
            console.log("Funktioniert");

            // anzeigen des <label>&<select> weil bedingungen erfüllt
            let labelBahnhof = document.getElementById("labelBahnhof");
            labelBahnhof.style.display = "flex";
            let auswahlBahnhof = document.getElementById("auswahlBahnhof");
            auswahlBahnhof.style.display = "flex";
            auswahlBahnhof.innerHTML = "";

            // eine leeres <option> als Placeholder hinzufügen
            let emptyItem = document.createElement("option");
            emptyItem.value = "";
            emptyItem.textContent = "Bahnhof wählen";
            emptyItem.className = "option";
            auswahlBahnhof.appendChild(emptyItem);

            // Den jeweiligen Bahnfof der Auswahl holen
            let bahnhof = bahnhöfe[auswahl];
            console.log(`Bahnhof = ${bahnhof}`);

            // <option> erzeugen und der Liste hinzufügen
            bahnhof.forEach((bahnho) => {
                let newItem = document.createElement("option");
                newItem.textContent = bahnho;
                newItem.className = "option";
                auswahlBahnhof.appendChild(newItem);
            });
        } else if (auswahl === "") {
            labelBahnhof.style.display = "none";
            auswahlBahnhof.style.display = "none";
            auswahlBahnhof.innerHTML = "";
        }
    } catch (error) {
        console.error("Error in Bahnhof selection: " + error);
    }
});
