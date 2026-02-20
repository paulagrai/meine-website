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

document.addEventListener('DOMContentLoaded', () => {
    // Start Quiz
    document.getElementById('start-quiz').addEventListener('click', () => {
        showSection('quiz');
        loadQuestion();
    });

    // Start Game Screen zu Game
    document.getElementById('go-to-game').addEventListener('click', () => {
        showSection('game');
        startMiniGame();
    });

    // Bubble Game
    const bubble = document.getElementById('bubble');
    bubble.addEventListener('click', () => {
        clicks++;
        document.getElementById('score').innerText = `Klicks: ${clicks}`;
        moveBubble();
    });
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
            else showSection('game-start');
        };
        container.appendChild(b);
    });
}

function startMiniGame() {
    moveBubble();
    const interval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft + "s";
        if (timeLeft <= 0) {
            clearInterval(interval);
            finish();
        }
    }, 1000);
}

function moveBubble() {
    const bubble = document.getElementById('bubble');
    const area = document.querySelector('.game-area');

    // Wir nehmen die Maße der Area, damit die Bubble nicht rausfliegt
    const maxX = area.clientWidth - 90;
    const maxY = area.clientHeight - 90;

    // Sicherheitscheck für negative Werte
    const posX = Math.max(0, Math.random() * maxX);
    const posY = Math.max(0, Math.random() * maxY);

    bubble.style.left = posX + "px";
    bubble.style.top = posY + "px";
}

function finish() {
    showSection('result');
    // Berechnung: Wer mehr als 20 Klicks schafft, knackt die 90%
    let swag = 25 + (clicks * 3.5);
    if (swag > 99) swag = 100;

    document.getElementById('swag-value').innerText = Math.floor(swag) + "%";
    document.getElementById('swag-comment').innerText = `Starke Leistung mit ${clicks} Klicks!`;
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