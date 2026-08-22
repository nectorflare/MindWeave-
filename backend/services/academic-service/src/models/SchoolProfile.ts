import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export default class SchoolProfile extends Model {
  declare id: string;
  declare school_code: string | null;
}

SchoolProfile.init({
  id: { type: DataTypes.UUID, primaryKey: true },
  school_code: { type: DataTypes.STRING(50), allowNull: true }
}, { sequelize, tableName: 'school_profiles', timestamps: true, underscored: true });
