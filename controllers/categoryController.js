const Category=require("../models/categoryModel")

const createCategory=async(req,res)=>{
    try{
        
        const newCategory=await Category.create(req.body);
        console.log(newCategory);
        res.redirect("/admin/category");

    }catch(error){
        console.log(error);
    }
}
const getAddCategory=async(req,res)=>{
    try {
        res.render("admin/addCategory");
      } catch (error) {
        console.log(error);
      }
}

const getEditCategory=async(req,res)=>{
    try {
        res.render("admin/editCategory");
      } catch (error) {
        console.log(error);
      }
}

const updateCategory=async(req,res)=>{
    const id=req.query.id;
    console.log(id);
    try{
        const updateProduct=await Category.findOneAndUpdate({id},req.body,{
            new:true
        })

        res.redirect("/admin/category");

    }catch(error){
        console.log(error);
    }
}

const deleteCategory=async(req,res)=>{
    const id=req.query.id;
    try{
        const deleteCategory=await Category.findOneAndDelete(id)

        res.redirect("/admin/category");

    }catch(error){
        console.log(error);
    }
}


module.exports={
    createCategory,
    updateCategory,
    deleteCategory,
    getAddCategory,
    getEditCategory

}