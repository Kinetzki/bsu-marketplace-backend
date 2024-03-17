const errorHandler = require("../util/errorHandler");
const bcrypt = require("bcryptjs");

const Student = require("../models/Students");
const { VerificationCodes, Tokens } = require("../models/Token");
const { updateOrCreateToken } = require("../helpers/tokenHelper");

const {
  transporter,
  createVerificationEmail,
} = require("../helpers/emailHelper");

exports.signUp = (req, res, next) => {
  const { email_address, password, username } = req.body;
  const saltRounds = 10;

  bcrypt
    .genSalt(saltRounds, function (err, salt) {
      if (err) {
        console.error("Error generating salt:", err);
        return next(err);
      }

      bcrypt.hash(password, salt, function (err, hashedPassword) {
        if (err) {
          console.error("Error hashing password:", err);
          return next(err);
        }
        Student.findOne({
          where: { email_address: email_address },
        }).then((data) => {
          if (data) {
            return errorHandler("Email is already existed!");
          }
          return Student.create({
            email_address,
            password: hashedPassword,
            username,
          }).then(() => {
            return res.status(201).json({
              success: true,
              message: "Signed Up successfully",
            });
          });
        });
      });
    })
    .catch((err) => {
      next(err);
    });
};
