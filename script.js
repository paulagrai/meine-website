const questions = [
    { q: "Was ist Paulas Lieblingsessen?", a: ["Pizza", "Sushi", "Döner", "Salat"] },
    { q: "Lieblingsjahreszeit?", a: ["Sommer", "Winter", "Herbst", "Frühling"] },
    { q: "Paulas Lieblingsfarbe?", a: ["Pink", "Schwarz", "Blau", "Grün"] },
    { q: "Was macht Paula am liebsten?", a: ["Coding", "Schlafen", "Netflix", "Reisen"] },
    { q: "Wie viel Swag denkst du hast du?", a: ["Viel", "Extrem viel", "Unendlich", "Was ist Swag?"] }
];

let currentQuestionIndex = 0;

document.getElementById('start-quiz').addEventListener('click', () => {
    showSection('quiz');
    showQuestion();
});

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.q;
    const container = document.getElementById('answer-buttons');
    container.innerHTML = '';

    question.a.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer;
        btn.classList.add('answer-btn');
        btn.onclick = nextQuestion;
        container.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    showSection('result');
    // Random Swag Generator
    const swag = Math.floor(Math.random() * 101);
    document.getElementById('swag-value').innerText = swag + "%";

    let comment = swag > 70 ? "Stabil!" : "Da geht noch was...";
    document.getElementById('swag-comment').innerText = comment;
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.replace('active', 'hidden'));
    document.getElementById(id).classList.replace('hidden', 'active');
}

// PayPal Weiterleitung
document.getElementById('improve-btn').addEventListener('click', () => {
    const paypalUrl = "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=paula.graichen@live.de&amount=1.00&currency_code=EUR&item_name=Swag+Improvement";
    window.open(paypalUrl, '_blank');
});