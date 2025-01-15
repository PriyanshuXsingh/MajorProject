const express = require("express");
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const { saveredirectUrl } = require("../middlewayer.js");
const userController = require("../controllers/users.js");
const passport = require("passport");

router.get("/signup",userController.getsignuppage);

router.post("/signup",wrapasync(userController.signup));

router.get("/login",userController.getloginpage);

router.post('/login',saveredirectUrl,(req, res, next) => {
  console.log('Received login request with user:', req.body);
  next();
}, passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: true,
}), userController.login
);
  
router.get("/logout",userController.logout);
  
module.exports = router;