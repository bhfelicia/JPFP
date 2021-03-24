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

router.post("/campuses", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.status(201).send(newCampus);
  } catch (error) {
    next(error);
  }
});

router.get("/campuses/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const campus = await Campus.findByPk(id, {
      include: Student,
    });
    res.send(campus);
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

router.get("/students/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id, {
      include: Campus,
    });
    res.send(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
