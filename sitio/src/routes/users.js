const express = require("express");
const router = express.Router();

const {
 login,
 registro
} = require("../controllers/usersController");

/* /users */
router.get("/login", login);
router.get("/registro", registro);


module.exports = router;
