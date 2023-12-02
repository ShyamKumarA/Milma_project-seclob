const Product=require("../models/productModel")
const multer =require('multer')





const createProduct=async(req,res)=>{
    try{
        const image = [];
        console.log(req.body); 
    // for (let i = 0; i < req.files.length; i++) {
    //   image[i] = req.files[i].filename;
    // }
    //     const newProduct=await Product.create(req.body);
    //     res.redirect("/admin/product");
    }catch(error){
        console.log(error);
    }
}

const getAddProduct=async(req,res)=>{
    try {
        res.render("admin/addProduct");
      } catch (error) {
        console.log(error);
      }
}

const getEditProduct=async(req,res)=>{
    try {
        res.render("admin/editProduct");
      } catch (error) {
        console.log(error);
      }
}

const updateProduct=async(req,res)=>{
    const id=req.params;
    try{
        const updateProduct=await Product.findOneAndUpdate({id},req.body,{
            new:true
        })

        res.redirect("/admin/product");

    }catch(error){
        console.log(error);
    }
}

const deleteProduct=async(req,res)=>{
    const id=req.params;
    try{
        const deleteProduct=await Product.findOneAndDelete(id)

        res.redirect("/admin/product");

    }catch(error){
        console.log(error);
    }
}

module.exports={
    createProduct,
    updateProduct,
    deleteProduct,
    getAddProduct,
    getEditProduct
}