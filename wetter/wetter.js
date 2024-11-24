
// Eventlistener um den aktuell ausgewählten ASC aufzufangen
document.getElementById("auswahlAsc").addEventListener("change", (event => {
    let auswahl = event.target.value;
    console.log(auswahl);
}))