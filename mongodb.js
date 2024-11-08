const mongoose = require('mongoose')
//conect to database
mongoose.connect('mongodb+srv://bplouff:sz3NYZ!Ta$WfKU*@hootdb.6sb0r.mongodb.net/TestData')

//check if database connected or not
.then(()=>{
    console.log('database connected successfully');
})
.catch((e)=>{
    console.log('database failed to connect:', e);
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