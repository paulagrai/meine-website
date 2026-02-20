// ... (Fragen-Array bleibt gleich)

let currentIdx = 0;
let clicks = 0;
let timeLeft = 10;
let gameInterval;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-quiz');
    if (startBtn) {
        startBtn.onclick = () => {
            showSection('quiz');
            loadQuestion();
        };
    }

    // Bubble Klick Logik
    const bubble = document.getElementById('bubble');
    if (bubble) {
        bubble.addEventListener('click', () => {
            clicks++;
            document.getElementById('score').innerText = `Klicks: ${clicks}`;
            moveBubble();
        });
    }
});

function loadQuestion() {
    const q = questions[currentIdx];
    const questionText = document.getElementById('question-text');
    const btnContainer = document.getElementById('answer-buttons');
    const progress = document.getElementById('progress');

    questionText.innerText = q.q;
    btnContainer.innerHTML = '';
    progress.style.width = ((currentIdx / questions.length) * 100) + "%";

    q.a.forEach(choice => {
        const b = document.createElement('button');
        b.innerText = choice;
        b.classList.add('answer-btn');
        b.onclick = () => {
            currentIdx++;
            if(currentIdx < questions.length) loadQuestion();
            else startGame(); // Nach den Fragen startet das Spiel
        };
        btnContainer.appendChild(b);
    });
}

function startGame() {
    showSection('game');
    moveBubble();

    gameInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Zeit: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            finish();
        }
    }, 1000);
}

function moveBubble() {
    const bubble = document.getElementById('bubble');
    // Berechnet zufällige Position innerhalb der Game-Area
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight / 2 - 100);

    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
}

function finish() {
    showSection('result');
    // Swag basiert nun auf Klicks (z.B. 50% Basis + 5% pro Klick, max 100)
    let swagResult = 50 + (clicks * 5);
    if (swagResult > 100) swagResult = 100;
    if (clicks === 0) swagResult = Math.floor(Math.random() * 20); // Strafe für 0 Klicks ;)

    document.getElementById('swag-value').innerText = swagResult + "%";
    document.getElementById('swag-comment').innerText = `Du hast ${clicks} Klicks geschafft!`;
}

// ... (pay und showSection Funktionen bleiben gleich)