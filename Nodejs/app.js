const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const userRouter = require("./router/data-router")
const app = express;


mongoose.connect('mongodb://localhost:27017/CRUD', { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/user', userRouter)

app.listen(3000, () => {
    console.log("server start");
})