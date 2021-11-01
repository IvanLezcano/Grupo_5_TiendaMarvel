var express = require("express");
var router = express.Router();

const {
  list,
  detail,
  create,
  search,
  categories
} = require("../../controllers/api/apiProducts");

/* endpoints: /api/products */
router
  .get("/", list)
  .get("/search", search)
  .get("/:id", detail)
  .get("/categories", categories)
  .post("/", create);
 

module.exports = router;
