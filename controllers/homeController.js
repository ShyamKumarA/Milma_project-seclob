
const Product=require("../models/productModel")




const getHome = async (req, res) => {
    try {
      const productData = await Product.find();
      console.log(productData);
      res.render("home/milmaHome",{product:productData});
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = {
    getHome,
  };
  