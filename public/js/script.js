// public/js/script.js
document.getElementById('clickMe').addEventListener('click', function() {
    window.location.href = '/login';
});

// Dark Mode Toggle Button Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});