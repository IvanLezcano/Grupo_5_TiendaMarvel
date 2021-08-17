const express = require("express");
const router = express.Router();
const validLogin = require('../validations/validLogin')
const {
 login,
 processLogin,
 registro
} = require("../controllers/usersController");

/* /users */
router.get("/login", login);
router.post("/login",validLogin,processLogin);
router.get("/registro", registro);


module.exports = router;
