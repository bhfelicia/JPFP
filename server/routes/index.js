const router = require("express").Router();
//import models from /db
const {
  Models: { Campus, Student },
} = require("../db");

router.get("/campuses", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
  } catch (error) {
    next(error);
  }
});

router.get("/students", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (error) {
    next(error);
  }
});

//routes go here

module.exports = router;
