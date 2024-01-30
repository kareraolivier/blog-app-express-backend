import { DataTypes } from "sequelize";
import db from "./db";
 
const Event = db.define(
  "event",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cover: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    date: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    button: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    time: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: "events",
    timestamps: false,
  }
);

export default Event;
