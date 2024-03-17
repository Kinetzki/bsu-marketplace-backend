const express = require("express");
const router = express.Router();
const validation = require("../../middlewares/routeValidation");
const { body, param } = require("express-validator");
const { signUp } = require("../../controller/account");
const Student = require("../../models/Students");

router.post(
  "/sign-up",
  [
    body("email_address").notEmpty().isEmail(),
    body("password").notEmpty(),
    body("username").notEmpty(),
  ],
  validation,
  signUp
);

module.exports = router;
