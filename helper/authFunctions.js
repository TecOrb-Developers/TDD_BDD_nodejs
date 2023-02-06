const User = require('../models/User');
const {jwtSecret} = require('../config/SecretToken')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

module.exports = {
    
    generateToken: (userData) => {
        const payload = {
            user: {
                id: userData.id,
                email: userData.email ,
                name: userData.name,
            }
        };
        return jwt.sign(
            payload,
            jwtSecret,
            {
                expiresIn: 3600
            },
        );
    },

    createPassword: async(userPassword) => {
        return bcrypt.hash(userPassword,12)
    },

    comparePassword: async (userpassword, givenpassword) => {
        return bcrypt.compare(userpassword,givenpassword);
    }
};