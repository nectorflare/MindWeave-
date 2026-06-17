const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const token = await userService.loginUser(email, password);
    return res.json({ token });
  } catch (error) {
    console.error('Login error:', error);

    if (error.message === 'User not found') {
      return res.status(404).json({ message: error.message });
    }

    if (error.message === 'Incorrect password') {
      return res.status(400).json({ message: error.message });
    }

    console.error('=== LOGIN ERROR DETAILS ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error sql:', error.sql);
    console.error('Error parameters:', error.parameters);
    console.error('Error stack:', error.stack);
    console.error('=== END ERROR DETAILS ===');

    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login
};
