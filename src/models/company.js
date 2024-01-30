import { DataTypes } from "sequelize";
import db from "./db";
 
const Company = db.define(
  "companyInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    telephone1: {
      type: DataTypes.STRING(20),
    },
    telephone2: {
      type: DataTypes.STRING(20),
    },
    email: {
      type: DataTypes.STRING(255),
    },
    location: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "companyinfo",
    timestamps: false,
  }
);

export default Company;
