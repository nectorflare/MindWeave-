import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class StudentProfile extends Model<InferAttributes<StudentProfile>, InferCreationAttributes<StudentProfile>> {
  declare id: CreationOptional<string>;
  declare user_id: string;
  declare school_id: CreationOptional<string | null>;
  declare first_name: string;
  declare last_name: string;
  declare gender: string;
  declare date_of_birth: string;
  declare class_grade: CreationOptional<string | null>;
  declare father_name: string;
  declare mother_name: string;
  declare parent_mobile_number: CreationOptional<string | null>;
  declare email_id: CreationOptional<string | null>;
  declare mobile_number: CreationOptional<string | null>;
  declare address: CreationOptional<string | null>;
  declare address_city: CreationOptional<string | null>;
  declare address_state: CreationOptional<string | null>;
  declare pincode: CreationOptional<string | null>;
  declare parent_data: CreationOptional<Record<string, any> | null>;
  declare address_data: CreationOptional<Record<string, any> | null>;
}

StudentProfile.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  school_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  class_grade: {
    type: DataTypes.STRING,
    allowNull: true
  },
  father_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mother_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parent_mobile_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email_id: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address_city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address_state: {
    type: DataTypes.STRING,
    allowNull: true
  },
  pincode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  parent_data: {
    type: DataTypes.JSON,
    allowNull: true
  },
  address_data: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'student_profiles',
  timestamps: true,
  underscored: true
});

export default StudentProfile;
