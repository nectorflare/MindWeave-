import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export default class Subject extends Model {
  declare id: string;
  declare name: string;
  declare code: string | null;
  declare description: string | null;
  declare syllabus_url: string | null;
  declare status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}

Subject.init({
  id: { type: DataTypes.UUID, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  code: { type: DataTypes.STRING(50), allowNull: true, unique: true },
  description: { type: DataTypes.TEXT, allowNull: true },
  syllabus_url: { type: DataTypes.STRING(500), allowNull: true },
  status: {
    type: DataTypes.ENUM('DRAFT', 'PUBLISHED', 'ARCHIVED'),
    allowNull: false,
    defaultValue: 'DRAFT'
  }
}, { sequelize, tableName: 'subjects', timestamps: true, underscored: true });

