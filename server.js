// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});