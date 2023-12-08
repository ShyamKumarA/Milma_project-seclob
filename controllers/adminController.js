const Product=require("../models/productModel")
const Category=require("../models/categoryModel")




const getAdminLogin=async(req,res)=>{
  try{
    res.render('admin/adminLogin',{ message: " " })

  }catch(error){
    console.log(error);
  }
}

const getadminLogout = (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/admin/login");
  } catch (error) {
    console.log(error);
  }
};

const postAdminLogin=async(req,res)=>{
  try{
    const adminEmail = "admin@gmail.com";
    const adminPassword = 12345678;

  if (req.body.email == adminEmail && req.body.password == adminPassword) {
    req.session.login = true;
    res.redirect("/admin/");
  } else {
    res.render("admin/adminLogin", { message: "Invalid credencials" });
  }
      
  }catch(error){
    console.log(error);
  }
}


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
    getAdmin,
    getproduct,
    getcategory,
    getAdminLogin,
    getadminLogout,
    postAdminLogin
  };
  