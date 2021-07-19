module.exports = {
  kids: (req, res) => {
    return res.render("kids", {
      title: "kids",
    });
  },
  quiz: (req, res) => {
    return res.render("quiz", {
      title: "quiz",
    });
  },
  
};
