const mongoose = require('mongoose')
//conect to database
mongoose.connect('mongodb://localhost:27017/login')

//check if database connected or not
.then(()=>{
    console.log('database connected successfully');
})
.catch((e)=>{
    console.log('database failed to connect');
})

//create a schema
const logInSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

//create model to collect data
const database = new mongoose.model('users',logInSchema)

module.exports = database