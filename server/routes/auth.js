const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check, validationResult } = require('express-validator');

// Register route
router.post(
  '/register',
  [
    check('fullname', 'Full name is required').not().isEmpty(),
    check('lastname', 'Last name is required').not().isEmpty(),
    check('surname', 'Surname is required').not().isEmpty(),
    check('organization', 'Organization is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    check('phone', 'Phone number is required').not().isEmpty(),
    check('birthday', 'Birthday is required').isDate()
  ],
  authController.register
);

// Login route
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  authController.login
);

module.exports = router;
