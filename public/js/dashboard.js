// public/js/dashboard.js
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
document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Perform a search or redirect logic here
        // e.g., window.location.href = `/search?q=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term!');
    }
});

