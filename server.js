const express = require('express');
const path = require('path');
const session = require('express-session'); // Add express-session
const app = express();

// Serve static files (CSS, JS)
app.use(express.static('public'));

// Middleware to parse JSON data
app.use(express.json());

// Set up sessions
app.use(session({
    secret: 'your-secret-key', // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure to true if using HTTPS
}));

// Simulated user data (replace with a real database or authentication mechanism)
const users = [
    { username: 'John', password: '123' }
];

// Serve the main index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Handle login requests (POST)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user in the simulated database
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Store login status in the session
        req.session.loggedIn = true;
        req.session.username = username;

        res.status(200).json({ message: 'Login successful', redirect: '/dashboard' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Serve the dashboard page
app.get('/dashboard', (req, res) => {
    // Check if user is logged in
    if (req.session.loggedIn) {
        res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
    } else {
        res.redirect('/login'); // Redirect to login if not authenticated
    }
});

// Set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
