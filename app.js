const express = require("express");
const bodyParser = require("body-parser");
const sequelizeConnect = require("./connection/database");
const routes = require("./routes/main-route");
const serverError = require("./util/server-error");

const app = express();

app.use("/public", express.static("public"));
app.use(bodyParser.json());
app.use('/api/v1', routes);
app.use(serverError);
app.use("*", (req, res, next) => {
    res.status(404).json({ success: false, message: "Resource unavailable." });
  });

sequelizeConnect
  .sync({
    //force: true
  })
  .then(() => {
    app.listen(port,  () => {
      console.log(`Server started @ PORT ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

const port = process.env.PORT || 3344;