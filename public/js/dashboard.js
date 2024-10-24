// Get username from the server-side session (this would be injected from server-side logic)
const username = 'JohnDoe'; // Placeholder, replace with actual username

// Update the username field in the dashboard
document.getElementById('username').textContent = username;

// Dark Mode Toggle Button Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
