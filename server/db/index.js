//import your db
const db = require("./db");
//import your models
const Student = require("./models/Student");
const Campus = require("./models/Campus");

//state your model associations
Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const beethoven = await Student.create({
      firstName: "Ludwig-van",
      lastName: "Beethoven",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
    });
    const debussy = await Student.create({
      firstName: "Claude",
      lastName: "Debussy",
      image:
        "https://cdn.britannica.com/83/216783-050-E461C8B6/French-composer-Claude-Debussy.jpg",
    });
    const ravel = await Student.create({
      firstName: "Maurice",
      lastName: "Ravel",
      image:
        "https://wpr-public.s3.amazonaws.com/wprorg/articles/2018/08/maurice-ravel.jpg",
    });
    const bach = await Student.create({
      firstName: "Johann-Sebastian",
      lastName: "Bach",
      image: "https://static.dw.com/image/18418948_303.jpg",
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
      imageUrl:
        "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2020/07/20191024_CL_DJA_178.jpg?itok=QmoPCsVE",
    });
    beethoven.campusId = rutgers.id;
    ravel.campusId = rutgers.id;
    bach.campusId = princeton.id;
    debussy.campusId = princeton.id;
    await Promise.all([
      beethoven.save(),
      debussy.save(),
      ravel.save(),
      bach.save(),
    ]);
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
