import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export default class ExamRegistration extends Model {
  declare id: string;
  declare student_id: string;
  declare exam_id: string;
  declare payment_order_id: string | null;
  declare registered_by_type: 'STUDENT' | 'SCHOOL' | 'ADMIN';
  declare registered_by_id: string;
  declare status: 'PENDING_PAYMENT' | 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
  declare admit_card_url: string | null;
  declare admit_card_status: 'NOT_GENERATED' | 'GENERATED' | 'PUBLISHED';
  declare result_score: string | null;
  declare result_status: 'NOT_AVAILABLE' | 'DRAFT' | 'PUBLISHED';
  declare certificate_url: string | null;
  declare result_metadata: unknown;
}

ExamRegistration.init({
  id: { type: DataTypes.UUID, primaryKey: true },
  student_id: { type: DataTypes.UUID, allowNull: false },
  exam_id: { type: DataTypes.UUID, allowNull: false },
  payment_order_id: { type: DataTypes.UUID, allowNull: true },
  registered_by_type: {
    type: DataTypes.ENUM('STUDENT', 'SCHOOL', 'ADMIN'),
    allowNull: false,
    defaultValue: 'STUDENT'
  },
  registered_by_id: { type: DataTypes.UUID, allowNull: false },
  status: {
    type: DataTypes.ENUM('PENDING_PAYMENT', 'PENDING', 'APPROVED', 'REJECTED', 'CANCELLED'),
    allowNull: false,
    defaultValue: 'PENDING_PAYMENT'
  },
  admit_card_url: { type: DataTypes.STRING(500), allowNull: true },
  admit_card_status: {
    type: DataTypes.ENUM('NOT_GENERATED', 'GENERATED', 'PUBLISHED'),
    allowNull: false,
    defaultValue: 'NOT_GENERATED'
  },
  result_score: { type: DataTypes.DECIMAL(7, 2), allowNull: true },
  result_status: {
    type: DataTypes.ENUM('NOT_AVAILABLE', 'DRAFT', 'PUBLISHED'),
    allowNull: false,
    defaultValue: 'NOT_AVAILABLE'
  },
  certificate_url: { type: DataTypes.STRING(500), allowNull: true },
  result_metadata: { type: DataTypes.JSON, allowNull: true }
}, {
  sequelize,
  tableName: 'exam_registrations',
  timestamps: true,
  underscored: true,
  indexes: [{ unique: true, fields: ['student_id', 'exam_id'] }]
});
