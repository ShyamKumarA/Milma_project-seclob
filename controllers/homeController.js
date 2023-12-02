




const getHome = async (req, res) => {
    try {
      res.render("home/milmaHome");
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = {
    getHome,
  };
  