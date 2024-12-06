const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb+srv://basic_user:uPa4oLfea8Rjje94@hootdb.6sb0r.mongodb.net/TestData')
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((e) => {
        console.log('Database failed to connect:', e);
    });

// Create login schema
const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'teacher', 'alumni'],
        required: true,
    },
});

// Create file schema
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    data: {
        type: Buffer,
        required: true,
    },
    contentType: {
        type: String,
        required: true,
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // Link to the user who uploaded the file
        required: true,
    },
});

// Models
const database = mongoose.model('users', logInSchema);
const File = mongoose.model('File', fileSchema);

module.exports = { database, File };
