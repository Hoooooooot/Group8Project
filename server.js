const express = require('express');
const path = require('path');
const session = require('express-session'); // Add express-session
const app = express();
const { database, File } = require("./mongodb")
const bcrypt = require('bcrypt')
const multer = require('multer'); // for files
const fs = require('fs'); // for files

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

// Set up multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

// Render file list, doesnt work
app.get('/files', async (req, res) => {
    try {
        const files = await file.find();
        res.send(files);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving files from the database.');
    }
});

// Render file based on ID, doesnt work
app.get('/files/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);

        if (!file) {
            return res.status(404).send('File not found');
        }
        res.contentType(file.contentType);
        res.send(file.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving the file from the database.');
    }
});

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

// Handle upload requests (POST)
app.post('/upload', upload.single('pdf'), async (req, res) => {
    try {
        const { origname, buffer, type } = req.file;

        const file = new File({
            name: origname,
            data: buffer,
            contentType: type,
        });

        await file.save();
        res.status(201).send('File successfully uploaded.');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('File upload failed.');
    }
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
