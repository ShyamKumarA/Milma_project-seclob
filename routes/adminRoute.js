const express = require('express');
const { getAdmin, getproduct, getcategory } = require('../controllers/adminController');
const { createProduct, deleteProduct, updateProduct, getAddProduct, getEditProduct } = require('../controllers/productController');
const { updateCategory, createCategory, deleteCategory, getAddCategory, getEditCategory } = require('../controllers/categoryController');
const upload = require('../config/multiUpload');
const admin_route=express.Router();
const adminRoute=express()

// homeRoute.set("view engine", "ejs");
adminRoute.set("adminviews", "/views/admin");

admin_route.get("/",getproduct)
admin_route.get("/product",getproduct)
admin_route.get("/category",getcategory)
admin_route.get("/addProduct",getAddProduct)
admin_route.get("/editProduct",getEditProduct)
admin_route.get("/addCategory",getAddCategory)
admin_route.get("/editCategory",getEditCategory)
admin_route.get('/deleteProduct',deleteProduct)
admin_route.get('/deleteCategory',deleteCategory)



admin_route.post('/addProduct',upload,createProduct)
admin_route.post('/addCategory',createCategory)
admin_route.post('/editProduct',updateProduct)




admin_route.put('/:id',updateCategory)










module.exports=admin_route;
