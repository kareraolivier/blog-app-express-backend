import { DataTypes } from "sequelize";
import db from "./db";
 
const Breadcrumb = db.define(
  "breadcrumb",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pageTitle: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    coverImage: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "breadcrumbs",
    timestamps: false,
  }
);

export default Breadcrumb;
