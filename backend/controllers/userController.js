const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');


//@desc     Register a New User
//@routes   POST /api/Users
//@access   Public
const registerUser = asyncHandler(async (req,res) => {
    const {name,email,password} = req.body;

    if(!name||!email||!password) {
        res.status(400);
        throw new Error('Please add all Fields')
    }

    //check if theUser already exisits
    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    //Encrypted Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //created the User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if(user) {
        //This is good
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid User Data');
    };
});

//#######################################################

//@desc     Authincate a User
//@routes   POST /api/user/login
//@access   Public
const loginUser = asyncHandler(async (req,res) => {
    res.json({message: 'Login User'});
});

//#######################################################


//@desc     Get User's Data
//@routes   GET /api/users/me
//@access   Public
const getMe = asyncHandler(async (req,res) => {
    res.json({message: 'Display User Data'});
});

module.exports = {
    registerUser,
    loginUser,
    getMe,
}

