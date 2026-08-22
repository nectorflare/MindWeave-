import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export default class Exam extends Model {
  declare id: string;
  declare subject_id: string;
  declare created_by: string | null;
  declare title: string;
  declare description: string | null;
  declare mode: 'ONLINE' | 'OFFLINE';
  declare start_time: Date;
  declare registration_start_at: Date | null;
  declare registration_end_at: Date | null;
  declare duration_mins: number;
  declare total_marks: number;
  declare fee: string;
  declare currency: string;
  declare capacity: number | null;
  declare eligibility_criteria: unknown;
  declare status: 'DRAFT' | 'PUBLISHED' | 'CLOSED' | 'CANCELLED' | 'COMPLETED';
}

Exam.init({
  id: { type: DataTypes.UUID, primaryKey: true },
  subject_id: { type: DataTypes.UUID, allowNull: false },
  created_by: { type: DataTypes.UUID, allowNull: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  mode: { type: DataTypes.ENUM('ONLINE', 'OFFLINE'), allowNull: false },
  start_time: { type: DataTypes.DATE, allowNull: false },
  registration_start_at: { type: DataTypes.DATE, allowNull: true },
  registration_end_at: { type: DataTypes.DATE, allowNull: true },
  duration_mins: { type: DataTypes.INTEGER, allowNull: false },
  total_marks: { type: DataTypes.INTEGER, allowNull: false },
  fee: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0 },
  currency: { type: DataTypes.STRING(10), allowNull: false, defaultValue: 'INR' },
  capacity: { type: DataTypes.INTEGER, allowNull: true },
  eligibility_criteria: { type: DataTypes.JSON, allowNull: true },
  status: {
    type: DataTypes.ENUM('DRAFT', 'PUBLISHED', 'CLOSED', 'CANCELLED', 'COMPLETED'),
    allowNull: false,
    defaultValue: 'DRAFT'
  }
}, { sequelize, tableName: 'exams', timestamps: true, underscored: true });

