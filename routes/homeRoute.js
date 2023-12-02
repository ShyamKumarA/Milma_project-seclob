const express = require('express');
const { getHome } = require('../controllers/homeController');
const home_route=express.Router();
const homeRoute=express()

// homeRoute.set("view engine", "ejs");
homeRoute.set("views", "/views/home");

home_route.get("/",getHome)


module.exports=home_route;