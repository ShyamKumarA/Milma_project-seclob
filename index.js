const express = require('express');
const app=express()
const nocache = require('nocache');
const session = require("express-session");
const dotenv = require('dotenv').config();
const PORT=process.env.PORT||4000;
const bodyParser = require('body-parser');
const homeRoute = require('./routes/homeRoute');
const adminRoute = require('./routes/adminRoute');
app.use(nocache());


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('public/admin'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
      secret: "shyam",
      saveUninitialized: true,
      resave: true,
    })
  );

app.use('/admin',adminRoute)
app.use('/',homeRoute)


app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING at PORT ${PORT}`);
})