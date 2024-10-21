const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (req, res,next) => {
  try {
    const { email, password } = req.body

    const user = await User.create({ email, password });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    next(error)
  }
}

const login = async (req, res) => {
  try {
    const  {email, password} = req. body
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    res.status(200).json({ access_token : token})

  } catch (error) {

    next(error)
    
  }
}

module.exports = {
  register,
  login
}