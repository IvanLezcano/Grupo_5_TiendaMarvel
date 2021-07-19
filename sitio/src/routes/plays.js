const express = require("express");
const router = express.Router();

const {
  kids, 
  quiz
} = require("../controllers/playsController");

/* /products */
router.get("/kids", kids);
router.get("/quiz", quiz);


module.exports = router;
