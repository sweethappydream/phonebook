require("dotenv").config();
const { Sequelize } = require("sequelize");

const db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  // const { host, port, user, password, database } = config;
  // const connection = await mysql.createConnection({ host, port, user, password });
  // await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const { DBURI, HOST, PORT } = process.env;
  try {
    const sequelize = new Sequelize(DBURI, {
      host: HOST,
      port: PORT,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false, // very important
        },
      },
    });
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.User = require("./user.model")(sequelize);
    await sequelize.sync({ alter: true });
    console.log("Connected to database!");
  } catch(err) {
    console.log("Database connection error!",err);
  }
}

module.exports = db;
