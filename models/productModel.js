const mongoose=require("mongoose")

var productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        require:true
    },
});

module.exports=mongoose.model("Product",productSchema)