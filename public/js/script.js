// public/js/script.js
const loginButton = document.getElementById('loginButton'); // Login button
loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/login';
});

const signupButton = document.getElementById('signupButton'); // Sign up page button
signupButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/signup';
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