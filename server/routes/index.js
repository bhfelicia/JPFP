const router = require("express").Router();

//import models from /db
router.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//routes go here

module.exports = router;
