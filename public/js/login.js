// public/js/login.js
signupButton.addEventListener('click', function(event) { // Sign up page button
    event.preventDefault();
    window.location.href = '/signup';
});

homeButton.addEventListener('click', function(event) { // Home button
    event.preventDefault();
    window.location.href = '/';
});

dbButton.addEventListener('click', function(event) { // Dashboard button
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

