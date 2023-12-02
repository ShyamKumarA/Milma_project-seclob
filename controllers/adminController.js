const Product=require("../models/productModel")
const Category=require("../models/categoryModel")






const getAdmin = async (req, res) => {
    try {
      res.render("admin/adminHome");
    } catch (error) {
      console.log(error);
    }
  };

  const getproduct = async (req, res) => {
    try {
      const products = await Product.find();
      res.render("admin/adminProduct",{ products });
    } catch (error) {
      console.log(error);
    }
  };

  const getcategory=async(req,res)=>{
    try{
        const data = await Category.find();
      res.render("admin/adminCategory", { data });

    }catch(err){
        console.log(err);
    }
}
  
  module.exports = {
    getAdmin,getproduct,getcategory
  };
  