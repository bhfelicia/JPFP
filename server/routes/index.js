const router = require("express").Router();
//import models from /db
const {
  Models: { Campus, Student },
} = require("../db");

router.get("/campuses", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: Student,
    });
    res.send(campuses);
  } catch (error) {
    next(error);
  }
});

router.get("/students", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: Campus,
    });
    res.send(students);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
