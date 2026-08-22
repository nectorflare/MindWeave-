import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export default class StudentProfile extends Model {
  declare id: string;
  declare school_id: string | null;
  declare first_name: string;
  declare last_name: string;
  declare class_grade: string | null;
}

StudentProfile.init({
  id: { type: DataTypes.UUID, primaryKey: true },
  school_id: { type: DataTypes.UUID, allowNull: true },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  class_grade: { type: DataTypes.STRING, allowNull: true }
}, { sequelize, tableName: 'student_profiles', timestamps: true, underscored: true });
