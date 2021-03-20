//import your db
const db = require("./db");
const Student = require("./models/Student");
const Campus = require("./models/Campus");
//import your models

Student.belongsTo(Campus);
Campus.hasMany(Student);
//state your model associations (hasOne etc)

const syncAndSeed = async () => {
  console.log("hi");
  try {
    console.log(Campus);
    console.log(Student);
    await db.sync({ force: true });
    const beethoven = await Student.create({
      firstName: "Ludwig van",
      lastName: "Beethoven",
    });
    const ravel = await Student.create({
      firstName: "Maurice",
      lastName: "Ravel",
    });
    const bach = await Student.create({
      firstName: "Johann Sebastian",
      lastName: "Bach",
    });
    const debussy = await Student.create({
      firstName: "Claude",
      lastName: "Debussy",
    });
    const rutgers = await Campus.create({
      name: "Rutgers University",
      address: "65 Davidson Road, Room 202, Piscataway, New Jersey 08854-8097",
      description:
        "Rutgers University–New Brunswick is one of three regional campuses of Rutgers University, New Jersey's public research university. It is located in New Brunswick and Piscataway. It is the oldest campus of the university, the others being in Camden and Newark.",
    });
    const princeton = await Campus.create({
      name: "Princeton University",
      address: "330 Alexander Street, 4th Floor, Princeton, NJ 08544",
      description:
        "Princeton University is a private Ivy League research university in Princeton, New Jersey. Founded in 1746 in Elizabeth as the College of New Jersey, Princeton is the fourth-oldest institution of higher education in the United States and one of the nine colonial colleges chartered before the American Revolution.",
    });
    // beethoven.campusId = rutgers.id;
    // ravel.campusId = rutgers.id;
    // bach.campusId = princeton.id;
    // debussy.campusId = princeton.id;
    // await Promise.all([
    //   beethoven.save(),
    //   ravel.save(),
    //   bach.save(),
    //   debussy.save(),
    // ]);
  } catch (error) {
    console.log(error);
  }
};

//export your db and Models (so they all can be imported from a single central location)
module.exports = {
  db,
  syncAndSeed,
  Models: {
    Student,
    Campus,
  },
};
