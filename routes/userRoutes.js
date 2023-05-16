const express = require("express");
const router = express.Router();


const signupUser = require("../controllers/authentication/signupUser")
const loginUser = require('../controllers/authentication/loginUser')
const userDetails =  require("../controllers/authentication/userDetails")
const auth =  require("../middlewares/auth")

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/me", auth, userDetails);

module.exports = router;
