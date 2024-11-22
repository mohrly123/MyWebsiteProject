// Zurück zu der Startseite
document.getElementById("closeBtn").addEventListener("click", () => {
    window.location.href = "../index.html"; // Absolute URL
    console.log("Zur Startseite");
});


// Wenn das Asc ausgewählt ist soll das Objekt mit dem jeweiligen ASC asugewählt werden und
// Die dazugehörigen Values sollem als <object> elemente zum Stützpunkt eingefügt werden

// Objekte bauen
let stuetzpunkte = {
    Spittal: ["Spittal", "Mallnitz", "Lienz"],
    Villach: ["Villach", "Fürnitz"],
    Klagenfurt: ["Klagenfurt", "Friesach", "St.Paul"]
}

document.getElementById("auswahlAsc").addEventListener("change", (event) => {
    let auswahl = event.target.value;
    
    console.log(auswahl);
    // Wenn die Auswahl Spittal ist sollen der untere select auf display = "flex" gestellt werden
    // Weiters sollen die Values des Arrays als <options> in das <select> hinzugefügt werden
    if (auswahl === "Spittal" || auswahl === "Villach" || auswahl === "Klagenfurt") {
        document.getElementById("labelStuetzpunkt").style.display = "inline-block";
        document.getElementById("auswahlStuetzpunkt").style.display = "inline-block";
        
        // Add options to the Stützpunkt select element
        let stuetzpunktSelect = document.getElementById("auswahlStuetzpunkt");
        stuetzpunktSelect.innerHTML = ""; // Clear previous options
        stuetzpunkte[auswahl].forEach(stuetzpunkt => {
            let option = document.createElement("option");
            option.value = stuetzpunkt;
            option.text = stuetzpunkt;
            stuetzpunktSelect.appendChild(option);
        });
    } else if (auswahl === "") {
        document.getElementById("labelStuetzpunkt").style.display = "none";
        document.getElementById("auswahlStuetzpunkt").style.display = "none";
        document.getElementById("auswahlStuetzpunkt").innerHTML = ""; // Clear options
    }
})