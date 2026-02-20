const questions = [
    { q: "Was ist Paulas Lieblingsessen?", a: ["Pizza", "Sushi", "Pasta", "Salat"] },
    { q: "Welche Jahreszeit findet Paula am besten?", a: ["Herbst", "Winter", "Sommer", "Frühling"] },
    { q: "Paulas Lieblings Farbe?", a: ["Pink", "Schwarz", "Blau", "Grün"] },
    { q: "Was macht Paula an einem freien Sonntag?", a: ["Ausschlafen", "Sport", "Coding", "Party"] },
    { q: "Ehrliche Einschätzung: Wie viel Swag hast du?", a: ["Unendlich", "Viel", "Mittelmäßig", "Keinen"] }
];

let currentIdx = 0;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-quiz');
    if (startBtn) {
        startBtn.onclick = () => {
            showSection('quiz');
            loadQuestion();
        };
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
            else finish();
        };
        btnContainer.appendChild(b);
    });
}

function finish() {
    showSection('result');
    const val = Math.floor(Math.random() * 31) + 65; // Zufall zwischen 65-95%
    document.getElementById('swag-value').innerText = val + "%";
    document.getElementById('swag-comment').innerText = "Dein Swag ist okay, aber nicht perfekt.";
}

function pay(amount) {
    const url = `https://www.paypal.me/PaulaGraichen/${amount}EUR`;
    window.location.href = url;
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('active');
}