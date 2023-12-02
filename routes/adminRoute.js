const express = require('express');
const { getAdmin, getproduct, getcategory } = require('../controllers/adminController');
const admin_route=express.Router();
const adminRoute=express()

// homeRoute.set("view engine", "ejs");
adminRoute.set("adminviews", "/views/admin");

admin_route.get("/",getAdmin)
admin_route.get("/product",getproduct)
admin_route.get("/category",getcategory)



module.exports=admin_route;
