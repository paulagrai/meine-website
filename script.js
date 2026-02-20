// ... (Deine Fragen-Logik bleibt gleich wie oben)

function finish() {
    showSection('result');
    const val = Math.floor(Math.random() * 41) + 50;
    document.getElementById('swag-value').innerText = val + "%";
    document.getElementById('swag-comment').innerText = "Dein Swag ist okay, aber nicht perfekt.";
}

function pay(amount) {
    const email = "paula.graichen@live.de";
    const url = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${email}&amount=${amount}.00&currency_code=EUR&item_name=Swag+Boost+Level+${amount}`;
    window.location.href = url;
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('active');
}