import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class StudentProfile extends Model<InferAttributes<StudentProfile>, InferCreationAttributes<StudentProfile>> {
  declare id: CreationOptional<string>;
  declare user_id: string;
  declare first_name: string;
  declare last_name: string;
  declare gender: string;
  declare date_of_birth: string;
  declare class_grade: string;
  declare school_name: string;
  declare city: string;
  declare state: string;
  declare father_name: string;
  declare mother_name: string;
  declare parent_mobile_number: CreationOptional<string | null>;
  declare email_id: string;
  declare mobile_number: string;
  declare address: string;
  declare address_city: string;
  declare address_state: string;
  declare pincode: string;
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
    allowNull: false
  },
  class_grade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  school_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
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
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address_city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address_state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pincode: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'student_profiles',
  timestamps: true,
  underscored: true
});

export default StudentProfile;
