const express = require('express');
const path = require('path');
const session = require('express-session'); // Add express-session
const app = express();
const database = require("./mongodb")
const bcrypt = require('bcrypt')

app.set('view engine', 'ejs'); // Set view engine to ejs
app.use(express.static(path.join('public'))); // Serve static files (CSS, JS)

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up sessions
app.use(session({
    secret: 'h00t', // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure to true if using HTTPS
}));

app.get('/', (req, res) => { // Render main page
    res.render("")
})

app.get('/signup', (req, res) => { // Render sign up page
    res.render("signup")
})

app.get('/login', (req, res) => { // Render login page
    res.render("login")
})

app.get('/upload', (req, res) => { // Render upload page    
    res.render("upload")
})

// Handle sign up requests (POST)
app.post('/signup', async (req, res) => {
    console.log('Received signup attempt:', req.body); // Log sign up attempt
    const userData= {
        name: req.body.username,
        password: req.body.password
    }
    try{
        // Check if username exists in database
        const check = await database.findOne({ name: userData.name})

        if (check) {
            res.send("<h1>Username in use. Please choose another username. Press back arrow to try again.</h1>")
        }
        else{
            try {
                /* //hash password using bcrpyt (uncomment later for hashing passwords)
                const sRounds = 10; //salt rounds for bcrypt
                const hashedPass = await bcrypt.hash(userData.password, sRounds);

                userData.password = hashedPass; //replace password with hash password */

                //insert account details into database
                const dataInserted = await database.insertMany([userData])
                res.redirect('/login')
            }
            catch {
                res.send("Error. If back button does not work, restart server.")
            }
        }
    }
    catch (error) {
        console.log(error);
        res.send("<h1>Error. If back button does not work, restart server</h1>")
    }   
})

// Handle login requests (POST)
app.post('/login', async (req, res) => {
        console.log('Received login attempt:', req.body); // Log the incoming data

    try {
        // Find user in real database
        const check = await database.findOne({name: req.body.username});
        if (!check) {
            res.status('<h1>Username does not exist. Use the back button to try again.</h1>');
        }
        else{
            const passwordMatch = await bcrypt.compare(req.body.password, check.password); // (works when using bcrypt)
            if (passwordMatch || req.body.password === check.password) { // Correct password -> Go to dashboard (remove second part of if statement when using hashed passwords)
                res.render('dashboard', { username: req.body.username });
            }else {
                res.send("<h1>Incorrect password. Press the back button to try again.</h1>");
            }
        }
    }
    catch (error) {
        console.log(error);
        res.send("<h1>Error. If back button does not work, restart server</h1>")
    }

})

app.post('/upload', async (req, res) => { // Handle upload requests
    console.log('Received upload attempt:'); // Log the incoming data
})

// Serve error if incorrect url
app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404: URL does not exist</h1>')
})

// Set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
