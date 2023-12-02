





const getAdmin = async (req, res) => {
    try {
      res.render("admin/adminHome");
    } catch (error) {
      console.log(error);
    }
  };

  const getproduct = async (req, res) => {
    try {
      res.render("admin/adminProduct");
    } catch (error) {
      console.log(error);
    }
  };

  const getcategory = async (req, res) => {
    try {
      res.render("admin/adminCategory");
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = {
    getAdmin,getproduct,getcategory
  };
  