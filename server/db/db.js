const Sequelize = require("sequelize");
//initialize your db, don't forget to include the possible heroku database URL

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/jpfp_db",
  { logging: false }
);

//export your db

module.exports = db;
