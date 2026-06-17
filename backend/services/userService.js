const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-env';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error('User not found');
  }

  const isValidPassword = user.validatePassword(password);
  if (!isValidPassword) {
    throw new Error('Incorrect password');
  }

  await user.update({ updatedAt: new Date() });

  const token = jwt.sign(
    { userId: user.userId, email: user.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return token;
};

module.exports = {
  loginUser
};
