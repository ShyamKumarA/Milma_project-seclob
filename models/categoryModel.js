const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  }, 
  product_count: {
    type: Number,
    default: 0,
  },
 
});

module.exports = mongoose.model("category", categorySchema);
