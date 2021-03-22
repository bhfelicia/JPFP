const express = require("express");
//initialize app
const app = express();
const path = require("path");

//require morgan|volleyball, path packages
const morgan = require("morgan");
//require db from /db
const db = require("./db/db");
const { syncAndSeed } = require("./db");

//use morgan|volleyball
app.use(morgan("dev"));
//use express.json()
app.use(express.json());
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//require in your routes and use them on your api path
app.use("/api", require("./routes"));
//404 handler

//500 handler

//set PORT
const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`app listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
init();
//listen
