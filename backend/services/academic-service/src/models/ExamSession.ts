import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export default class ExamSession extends Model {
  declare id: string;
  declare registration_id: string;
  declare status: 'ACTIVE' | 'SUBMITTED' | 'EXPIRED';
}

ExamSession.init({
  id: { type: DataTypes.UUID, primaryKey: true },
  registration_id: { type: DataTypes.UUID, allowNull: false },
  status: { type: DataTypes.ENUM('ACTIVE', 'SUBMITTED', 'EXPIRED'), allowNull: false }
}, { sequelize, tableName: 'exam_sessions', timestamps: true, underscored: true });
