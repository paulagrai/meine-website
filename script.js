document.getElementById('swagButton').addEventListener('click', function() {
    // Zufallszahl zwischen 1 und 100 generieren
    const swagLevel = Math.floor(Math.random() * 100) + 1;

    // Das Ergebnis im HTML anzeigen
    const resultElement = document.getElementById('result');
    resultElement.textContent = swagLevel + "%";

    // Kleiner Animationseffekt
    resultElement.style.transform = "scale(1.2)";
    setTimeout(() => {
        resultElement.style.transform = "scale(1.0)";
    }, 200);
});