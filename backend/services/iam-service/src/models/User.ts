import bcrypt from 'bcryptjs';
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare email: string;
  declare password_hash: string;
  declare role: 'STUDENT' | 'SCHOOL_ADMIN' | 'SYS_ADMIN';
  declare status: CreationOptional<'ACTIVE' | 'INACTIVE' | 'SUSPENDED'>;
  declare is_email_verified: CreationOptional<boolean>;
  declare failed_login_attempts: CreationOptional<number>;
  declare last_login_at: CreationOptional<Date | null>;
  declare password_reset_token: CreationOptional<string | null>;
  declare reset_token_expires_at: CreationOptional<Date | null>;
  declare deleted_at: CreationOptional<Date | null>;

  validatePassword(password: string) {
    return bcrypt.compareSync(password, this.password_hash);
  }
}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('STUDENT', 'SCHOOL_ADMIN', 'SYS_ADMIN'),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED'),
    defaultValue: 'ACTIVE'
  },
  is_email_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  failed_login_attempts: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  last_login_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  password_reset_token: {
    type: DataTypes.STRING,
    allowNull: true
  },
  reset_token_expires_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'users',
  timestamps: true,
  underscored: true
});

User.beforeCreate(async user => {
  if (user.password_hash) {
    user.password_hash = await bcrypt.hash(user.password_hash, 10);
  }
});

User.beforeUpdate(async user => {
  if (user.changed('password_hash')) {
    user.password_hash = await bcrypt.hash(user.password_hash, 10);
  }
});

export default User;
