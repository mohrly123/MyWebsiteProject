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
  Klagenfurt: ["Klagenfurt", "Friesach", "St.Paul"],
};

document.getElementById("auswahlAsc").addEventListener("change", (event) => {
  let auswahl = event.target.value;

  console.log(auswahl);
  // Wenn die Auswahl Spittal ist sollen der untere select auf display = "flex" gestellt werden
  // Weiters sollen die Values des Arrays als <options> in das <select> hinzugefügt werden
  if (
    auswahl === "Spittal" ||
    auswahl === "Villach" ||
    auswahl === "Klagenfurt"
  ) {
    document.getElementById("labelStuetzpunkt").style.display = "inline-block";
    document.getElementById("auswahlStuetzpunkt").style.display =
      "inline-block";
    document.getElementById("auswahlStuetzpunkt").className = "auswahlAsc";

    // Add options to the Stützpunkt select element
    let stuetzpunktSelect = document.getElementById("auswahlStuetzpunkt");
    stuetzpunktSelect.innerHTML = ""; // Clear previous options

    // Add an empty option to allow hiding the Stützpunkt select element
    let emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.text = "Bitte wählen";
    stuetzpunktSelect.appendChild(emptyOption);

    // Ins Objekt Stuetzpunkte gehen / Da die auswahl (Spittal/Villach/Klagenfurt nehmen)
    // und in der variable stuetzpunkt jeden durchlauf speichern
    stuetzpunkte[auswahl].forEach((stuetzpunkt) => {
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
});

// Label ID = labelStuetzpunkt  // Select ID = auswahlStuetzpunkt
// wenn ich jetzt aus dem Stützpunkt etwas wähle z.B ASC = Spittal / Stützpunkt = Spittal
// soll über ein weiteres objekt interiiert werden und dieses als
// Label = Bahnhof / Option = die Bahnhöfe dieser Auswahl

// Bauen der Bahnhöfe die dem jeweiligen Stützpunk zugeordnet sind
let bahnhöfeSpittal = {
  Spittal: ["Spittal", "Rothenthurn", "Feistritz", "Gummern"],
  Mallnitz: [
    "Böckstein",
    "Mallnitz",
    "Penk",
    "Kolbnitz",
    "Mühldorf",
    "Pusarnitz",
    "Spittal",
  ],
  Lienz: ["Sillian", "Abfaltersbach", "Thal", "Lienz"],
};
let bahnhöfeVillach = {
  Villach: ["Test1"],
  Fürnitz: ["Test2"],
};
let bahnhöfeKlagenfurt = {
  Klagenfurt: ["Test1"],
  Friesach: ["Test2"],
  StPaul: ["Test3"],
};

// Wenn Stützpunkt Lienz gewählt ist sollen die Bahnhöfe von Lienz als optionen angezeigt werden
// Zuerst soll wenn ein Key aus den verschiedenen den gegebene entspricht das neue select angezeigt werden
document
  .getElementById("auswahlStuetzpunkt")
  .addEventListener("change", (event) => {
    let auswahl = event.target.value;
    try {
      if (
        auswahl === "Spittal" ||
        auswahl === "Mallnitz" ||
        auswahl === "Lienz" ||
        auswahl === "Villach" ||
        auswahl === "Fürnitz" ||
        auswahl === "Klagenfurt" ||
        auswahl === "Friesach" ||
        auswahl === "St.Paul"
      ) {
        // Wenn die Auswahl eines dieser Ist dann soll das nächste select + Label angezeigt werden
        //auswahlBahnhof
        document.getElementById("labelBahnhof").style.display = "inline-block";
        document.getElementById("auswahlBahnhof").style.display = "inline-block";
        document.getElementById("auswahlBahnhof").className = "auswahlAsc";
        // Referenz auf das auswahlBahnhof select
        let auswahlBahnhof = document.getElementById("auswahlBahnhof");
        auswahlBahnhof.innerHTML = "";
        // Eine leere Option erstellen das es wieder verschwindet
        let leereOption = document.createElement("option");
        leereOption.value = "";
        leereOption.text = "Auswählen";
        auswahlBahnhof.appendChild(leereOption);

        // Nachdem die leere Option hinzugefügt wurde, soll laut jeweiliger Auswahl die Bahnhöfe hinzugefügt werden




        // !!!!!!!!!!!!!!!!!!!!!!!!! Hier weiter
        


      }
      else if(auswahl===""){
        document.getElementById("labelBahnhof").style.display = "none";
        document.getElementById("auswahlBahnhof").style.display = "none";
        document.getElementById("auswahlBahnhof").innerHTML = "";
      }

    } catch (error) {
      console.log("error" + error);
    }
  });
