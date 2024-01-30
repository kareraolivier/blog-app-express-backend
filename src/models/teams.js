import { DataTypes } from 'sequelize';
import db from './db';
 
const Team = db.define('team', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  memberType: {
    type: DataTypes.ENUM('Core', 'Others'),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  role: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  profile: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'team',
  timestamps: false
});

export default Team;