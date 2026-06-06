import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class SchoolProfile extends Model<InferAttributes<SchoolProfile>, InferCreationAttributes<SchoolProfile>> {
  declare id: CreationOptional<string>;
  declare user_id: string;
  declare school_name: string;
  declare school_code: CreationOptional<string | null>;
  declare school_type: string;
  declare board_name: string;
  declare affiliation_number: string;
  declare udise_code: string;
  declare established_year: string;
  declare address_line1: string;
  declare address_line2: CreationOptional<string | null>;
  declare city: string;
  declare district: string;
  declare state: string;
  declare pincode: string;
  declare country: string;
  declare principal_name: string;
  declare principal_mobile_number: string;
  declare principal_email_id: string;
  declare olympiad_coordinator_name: string;
  declare designation: string;
  declare mobile_number: string;
  declare whatsapp_number: string;
  declare coordinator_email_id: string;
}
SchoolProfile.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  school_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  school_code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  school_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  board_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  affiliation_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  udise_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  established_year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address_line1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address_line2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pincode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  principal_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  principal_mobile_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  principal_email_id: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  olympiad_coordinator_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  whatsapp_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  coordinator_email_id: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  sequelize,
  tableName: 'school_profiles',
  timestamps: true,
  underscored: true
});

export default SchoolProfile;
