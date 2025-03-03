import bcrypt from 'bcryptjs';
import User from '../model/user.schema.js';
import { asyncHandler } from '../middleware/ErrorHandler/asyncHandler.js';  
import { generateJWT, sendTokenInCookie } from '../utils/generateJwtToken.js';
import errorResponse from '../middleware/ErrorHandler/errorResponse.js';

// Signup Route
export const signup = asyncHandler(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return next(new errorResponse('Please provide all fields (name, email, password, confirmPassword)', 400));
  }

  if (password !== confirmPassword) {
    return next(new errorResponse('Passwords do not match', 400));
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return next(new errorResponse('User already exists with this email', 400));
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Generate JWT and send it in a cookie
  const token = generateJWT(newUser);
  sendTokenInCookie(res, token);

  res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    data: {
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    },
  });
});

// Login Route
export const Login = asyncHandler(async (req, res, next) => { 
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new errorResponse('Please provide email and password', 400));
    }

    const user = await User.findOne({ email });
    if (!user) {
      return next(new errorResponse('Invalid credentials', 401));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new errorResponse('Invalid credentials', 401));
    }

    // Generate JWT and send it in a cookie
    const token = generateJWT(user);
    sendTokenInCookie(res, token);

    res.status(200).json({
      status: 'success',
      message: 'User logged in successfully',
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
});

// Logout Route
export const Logout = asyncHandler(async (req, res, next) => {
    res.clearCookie('jwt', {
      httpOnly: true,          
      secure: process.env.NODE_ENV === 'production',  
      sameSite: 'Strict',      
    });

    return res.status(200).json({ message: 'Logged out successfully' });
});

