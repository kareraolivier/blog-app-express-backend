const { Pool } = require("pg");
import dotenv from "dotenv";
dotenv.config();

const config = new Pool({
  username: "postgres",
  host: process.env.DEV_URL,
  database: "postgres",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export default config;
