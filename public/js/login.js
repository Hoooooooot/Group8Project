document.getElementById('loginForm').addEventListener('submit', async function(event) {
    console.log("start");
    event.preventDefault();  // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        console.log("trying!!!")
    // Send POST request to server
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

        // Check response status
        if (response.ok) {
            console.log("checking!!!")
            const data = await response.json();
            // Redirect if login is successful
            console.log("succcess!!!")
            response.redirect('http://localhost:3000/dashboard');
        } else {
            console.log("no succcess!!!")
            const errorData = await response.json();
            // Show error message
            document.getElementById('message').textContent = errorData.message;
        }
    } catch (error) {
        console.error('An error occurred:', error);
        // Display a generic error message to the user
        document.getElementById('message').textContent = 'An error occurred. Please try again later.';
    }
});

// Dark Mode Toggle Button Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
