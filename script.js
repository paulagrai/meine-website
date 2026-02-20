const questions = [
    { q: "Was ist Paulas Lieblingsessen?", a: ["Pizza", "Sushi", "Pasta", "Burger"] },
    { q: "Lieblingsjahreszeit?", a: ["Sommer", "Winter", "Herbst", "Frühling"] },
    { q: "Signature-Farbe?", a: ["Pink", "Schwarz", "Blau", "Grün"] },
    { q: "Sonntags-Vibe?", a: ["Netflix", "Sport", "Coding", "Party"] },
    { q: "Dein Swag-Level?", a: ["Hoch", "Sehr Hoch", "Maximum", "Keiner"] }
];

let currentIdx = 0;
let clicks = 0;
let timeLeft = 10;
let gameStarted = false;

document.addEventListener('DOMContentLoaded', () => {
    // Start Button Fix
    const startBtn = document.getElementById('start-quiz');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            showSection('quiz');
            loadQuestion();
        });
    }

    // Bubble Game
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
    document.getElementById('question-text').innerText = q.q;
    const container = document.getElementById('answer-buttons');
    container.innerHTML = '';

    document.getElementById('progress').style.width = ((currentIdx / questions.length) * 100) + "%";

    q.a.forEach(choice => {
        const b = document.createElement('button');
        b.innerText = choice;
        b.classList.add('answer-btn');
        b.onclick = () => {
            currentIdx++;
            if(currentIdx < questions.length) loadQuestion();
            else startMiniGame();
        };
        container.appendChild(b);
    });
}

function startMiniGame() {
    showSection('game');
    moveBubble();
    const timerElement = document.getElementById('timer');

    const interval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft + "s";
        if (timeLeft <= 0) {
            clearInterval(interval);
            finish();
        }
    }, 1000);
}

function moveBubble() {
    const bubble = document.getElementById('bubble');
    const area = document.querySelector('.game-area');
    const maxX = area.clientWidth - 70;
    const maxY = area.clientHeight - 70;

    bubble.style.left = Math.random() * maxX + "px";
    bubble.style.top = Math.random() * maxY + "px";
}

function finish() {
    showSection('result');
    let swag = 40 + (clicks * 6);
    if (swag > 100) swag = 100;
    document.getElementById('swag-value').innerText = swag + "%";
    document.getElementById('swag-comment').innerText = `${clicks} Klicks! Stabil.`;
}

function pay(amount) {
    window.location.href = `https://www.paypal.me/PaulaGraichen/${amount}EUR`;
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    const target = document.getElementById(id);
    target.classList.remove('hidden');
    target.classList.add('active');
}