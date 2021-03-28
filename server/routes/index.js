const router = require("express").Router();
const { default: axios } = require("axios");
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

router.delete("/campuses/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const campus = await Campus.findByPk(id);
    await campus.destroy();
    res.sendStatus(204);
  } catch (error) {}
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

router.post("/students", async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).send(newStudent);
  } catch (error) {
    next(error);
  }
});

router.delete("/students/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    await student.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
