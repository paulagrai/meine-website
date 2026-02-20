const questions = [
    { q: "Was ist Paulas absolutes Lieblingsessen?", a: ["Pizza Margherita", "Sushi", "Pasta", "Burger"] },
    { q: "In welcher Jahreszeit blüht Paula auf?", a: ["Sommer (Hot Girl Summer)", "Winter (Cozy)", "Herbst", "Frühling"] },
    { q: "Paulas Signature-Farbe?", a: ["Pink", "Schwarz", "Babyblau", "Grün"] },
    { q: "Was macht Paula an einem freien Sonntag?", a: ["Ausschlafen & Netflix", "Sport", "Coding", "Party"] },
    { q: "Ehrliche Einschätzung: Wie viel Swag hast du?", a: ["Mehr als alle anderen", "Viel", "Mittelmäßig", "Keinen"] }
];

let currentIdx = 0;

// Wartet, bis die Seite geladen ist
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

    if (!questionText || !btnContainer) return;

    questionText.innerText = q.q;
    btnContainer.innerHTML = '';

    if (progress) {
        progress.style.width = ((currentIdx / questions.length) * 100) + "%";
    }

    q.a.forEach(choice => {
        const b = document.createElement('button');
        b.innerText = choice;
        b.classList.add('answer-btn');
        b.onclick = () => {
            currentIdx++;
            if(currentIdx < questions.length) {
                loadQuestion();
            } else {
                finish();
            }
        };
        btnContainer.appendChild(b);
    });
}

function finish() {
    showSection('result');
    const val = Math.floor(Math.random() * 41) + 50;
    const swagDisplay = document.getElementById('swag-value');
    const swagComment = document.getElementById('swag-comment');

    if (swagDisplay) swagDisplay.innerText = val + "%";
    if (swagComment) swagComment.innerText = "Dein Swag ist okay, aber nicht perfekt.";
}

function pay(amount) {
    const email = "paula.graichen@live.de";
    const url = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${email}&amount=${amount}.00&currency_code=EUR&item_name=Swag+Boost+Level+${amount}`;
    window.location.href = url;
}

function showSection(id) {
    // Alle Sektionen verstecken
    document.querySelectorAll('section').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });

    // Ziel-Sektion zeigen
    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
}