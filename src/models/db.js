import { Sequelize } from "sequelize";
import props from "../config/config";

const env = process.env.NODE_ENV || "development";
const config = props[env];

let db;
const { host, database, username, password } = config;

if (config.host) {
  db = new Sequelize(host, { dialect: "postgres" });
} else {
  db = new Sequelize(database, username, password, config);
}

db.authenticate()
  .then(() => {
    console.log("Connection has been established to db successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default db;
