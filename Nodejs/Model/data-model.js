

const mongoose = require("mongoose");

const userSchma = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    company: String
})



module.exports = mongoose.model('User', userSchma)
