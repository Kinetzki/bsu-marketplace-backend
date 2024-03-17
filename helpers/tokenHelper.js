const jwt = require("jsonwebtoken");
const Tokens = require("../models/Token");

const generateToken = (data) => {
  return jwt.sign(data, process.env.SECRETKEY, {
    expiresIn: "1h",
  });
};

const updateOrCreateToken = (userId) => {
  let token;

  return ClientUserTokens.findOne({
    where: { client_id: userId },
  })
    .then((existingToken) => {
      token = generateToken({ id: userId });

      if (existingToken) {
        return existingToken.update({
          token,
          expirationDate: new Date(Date.now() + 1 * 60 * 60 * 1000),
        });
      } else {
        return ClientUserTokens.create({
          token,
          expirationDate: new Date(Date.now() + 1 * 60 * 60 * 1000),
          client_id: userId,
        });
      }
    })
    .then(() => {
      console.log("Generated Token:", token);
      return token;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { generateToken, updateOrCreateToken };
