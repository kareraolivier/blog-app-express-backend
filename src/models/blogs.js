import { DataTypes } from "sequelize";
import db from "./db";
 
const Blog = db.define(
  "blog",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    authorName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    authorDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "blogs",
    timestamps: false,
    underscore: true,
  }
);

export default Blog;
