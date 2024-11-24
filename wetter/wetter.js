// Navigation back to MainPage
document.getElementById("closeBtn").addEventListener("click", () => {
    location.href = "../index.html";
})


// Funktion für die Stützpunkte
document.getElementById("auswahlAsc").addEventListener("change", (event => {
    let auswahl = event.target.value;
    console.log(`Auswahl ASC: ${auswahl}`);
    

    // Stützpunkte zum jeweiligen ASC als Objekt
    let stuetzpunkteImAsc = {
        Spittal: ["Lienz","Mallnitz","Spittal"],
        Villach: ["Fürnitz H8", "Fürnitz H4", "Villach"],
        Klagenfurt: ["Friesach", "St.Paul", "Klagenfurt"]
    }

    

    try{
        if(auswahl == "Spittal" || auswahl == "Villach" || auswahl == "Klagenfurt"){
            
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
    
            
            stuetzpunkte.forEach(stuetzpunkt => {
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
            })

            

        }
    }
    catch(error){
        console.error("Catch Block" + error);
    }
    

    


        




}));

// Funktion für die Bahnhöfe
document.getElementById("auswahlStuetzpunkt").addEventListener("change", (event) => {
    let auswahl = event.target.value;
    console.log(`Stützpunkt: ${auswahl}`);
    // Bauen des Objektes KEY = Stützpunkt / VALUE = Bahnhöfe des Stützpunktes
    let bahnhöfe = {
        Spittal: ["Gummern","Feistritz","Rothenthurn","Spittal"],
        Lienz: ["Sillian", "Thal", "Abfaltersbach"],
        Mallnitz: ["Böckstein", "Mallnitz"],
        H8: ["Hermagor", "Nötsch"],
        H4: ["Fürnitz", "Neuhaus"],
        Villach: ["Velden", "Villach"],
        Klagenfurt: ["Viktring", "Klagenfurt"],
        Friesach: ["Unzmarkt", "Friesach"],
        StPaul: ["St.Paul", "Weststeiermark"]
    }
})