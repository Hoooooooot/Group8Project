// public/js/login.js
const signupButton = document.getElementById('signupButton'); // Sign up page button
signupButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/signup';
});

const homeButton = document.getElementById('homeButton'); // Home button
homeButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/';
});

const dbButton = document.getElementById('dbButton'); // Dashboard button
dbButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/dashboard';
});

const darkModeToggle = document.getElementById('dark-mode-toggle'); // Dark mode button
const body = document.body;
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

