document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send POST request to server
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        // Redirect to the dashboard if login is successful
        window.location.href = data.redirect;
    } else {
        // Show error message
        document.getElementById('message').textContent = data.message;
    }
});
