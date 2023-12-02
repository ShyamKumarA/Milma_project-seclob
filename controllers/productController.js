const Product=require("../models/productModel")
const multer =require('multer')
const Category=require("../models/categoryModel")






const createProduct=async(req,res)=>{
    try{
        const product = new Product({
            productName: req.body.productName,
            price: req.body.price,
            category: req.body.category,
            quantity:req.body.quantity,
            image: req.file.filename // Use req.file instead of req.body.filename
          });
        
          product.save()
        res.redirect("/admin/product");
    }catch(error){
        console.log(error);
    }
}

const getAddProduct=async(req,res)=>{
    try {
        const catData = await Category.find();

        res.render("admin/addProduct",{category:catData});
      } catch (error) {
        console.log(error);
      }
}

const getEditProduct=async(req,res)=>{
    try {
        const id = req.query.id;
        const productData = await Product.findOne({ _id: id })
        const catData = await Category.find();
        res.render("admin/editProduct",{
            product: productData,
            category: catData,
          });
      } catch (error) {
        console.log(error);
      }
}

const updateProduct=async(req,res)=>{
    const id=req.query.id;
    console.log(id);
    console.log(req.body);
    try{
        await Product.findByIdAndUpdate(id, {
            productName: req.body.productName,
            price: req.body.price,
            category: req.body.category,
            quantity:req.body.quantity,
          });

        res.redirect("/admin/product");

    }catch(error){
        console.log(error);
    }
}

const deleteProduct=async(req,res)=>{
    const id=req.query.id;
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