import { DataTypes } from "sequelize";
import db from "./db";
 
const Sections = db.define(
  "section",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    coverImage: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    learnMoreButtonLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "sections",
    timestamps: false,
  }
);

export default Sections;
