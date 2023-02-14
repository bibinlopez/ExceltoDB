const mongoose = require('mongoose')
const studentSchema= new mongoose.Schema({
    name:{
        type: String,
        trim: true
    },
    mobile:{
        type: Number
    },
    email:{
        type:String,
        trim: true
    },
    class:{
        type:String
    }
    
})

module.exports = mongoose.model('Student',studentSchema)