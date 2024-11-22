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
        document.getElementById("auswahlStuetzpunkt").className = "auswahlAsc";
        
        // Add options to the Stützpunkt select element
        let stuetzpunktSelect = document.getElementById("auswahlStuetzpunkt");
        stuetzpunktSelect.innerHTML = ""; // Clear previous options
        // Ins Objekt Stuetzpunkte gehen / Da die auswahl (Spittal/Villach/Klagenfurt nehmen)
        // und in der variable stuetzpunkt jeden durchlauf speichern
        stuetzpunkte[auswahl].forEach(stuetzpunkt => {
            // erstellen bei jedem Durchlauf einer neuen option Klasse
            console.log(`Im Array: ${stuetzpunkt}`);
            let option = document.createElement("option");
            option.value = stuetzpunkt;
            option.text = stuetzpunkt;
            option.className = "option"; // Apply the same class as the existing options
            stuetzpunktSelect.appendChild(option);
        });
    } else if (auswahl === "") {
        document.getElementById("labelStuetzpunkt").style.display = "none";
        document.getElementById("auswahlStuetzpunkt").style.display = "none";
        document.getElementById("auswahlStuetzpunkt").innerHTML = ""; // Clear options
    }
})