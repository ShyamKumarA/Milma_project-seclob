const express = require('express');
const {  getproduct, getcategory, getAdminLogin, postAdminLogin, getadminLogout } = require('../controllers/adminController');
const { createProduct, deleteProduct, updateProduct, getAddProduct, getEditProduct } = require('../controllers/productController');
const { updateCategory, createCategory, deleteCategory, getAddCategory, getEditCategory } = require('../controllers/categoryController');
const upload = require('../config/multiUpload');
const { isLogin, isLogout } = require('../middlewares/adminAuth');
const admin_route=express.Router();
const adminRoute=express()

// homeRoute.set("view engine", "ejs");
adminRoute.set("adminviews", "/views/admin");

admin_route.get('/login',isLogout,getAdminLogin)
admin_route.get("/",isLogin,getproduct)
admin_route.get("/product",isLogin,getproduct)
admin_route.get("/category",isLogin,getcategory)
admin_route.get("/addProduct",isLogin,getAddProduct)
admin_route.get("/editProduct",isLogin,getEditProduct)
admin_route.get("/addCategory",isLogin,getAddCategory)
admin_route.get("/editCategory",isLogin,getEditCategory)
admin_route.get('/deleteProduct',isLogin,deleteProduct)
admin_route.get('/deleteCategory',isLogin,deleteCategory)
admin_route.get('/logout',getadminLogout)



admin_route.post('/login',postAdminLogin)
admin_route.post('/addProduct',upload,createProduct)
admin_route.post('/addCategory',createCategory)
admin_route.post('/editProduct',updateProduct)




admin_route.put('/:id',updateCategory)










module.exports=admin_route;
