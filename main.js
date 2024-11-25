document.getElementById("btnWeather").addEventListener("click", ()=>{
    window.location.href = "./wetter/wetter.html"; // Absolute URL
})

// Click auf btn Mindestverrechnung dann weiter mit eventlistener
document.getElementById("btnMv").addEventListener("click", () => {
    location.href = "./mindestverrechnung/mv.html";
})

document.getElementById("btnHebe").addEventListener("click", () => {
    location.href = "./heberechner/hebung.html";
})