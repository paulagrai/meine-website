document.addEventListener('DOMContentLoaded', () => {
    const welcomeSection = document.getElementById('welcome');
    const profileSection = document.getElementById('profile');
    const btnShowProfile = document.getElementById('show-profile');
    const btnGoBack = document.getElementById('go-back');

    // Button-Klick: Von Welcome zu Steckbrief
    btnShowProfile.addEventListener('click', () => {
        welcomeSection.classList.remove('active');
        welcomeSection.classList.add('hidden');

        profileSection.classList.remove('hidden');
        profileSection.classList.add('active');
    });

    // Button-Klick: Zurück zur Startseite
    btnGoBack.addEventListener('click', () => {
        profileSection.classList.remove('active');
        profileSection.classList.add('hidden');

        welcomeSection.classList.remove('hidden');
        welcomeSection.classList.add('active');
    });
});