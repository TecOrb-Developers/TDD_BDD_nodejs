const createError = require('http-errors')
const User = require("../../models/User");
const { storeUser } = require('../../models/User');
const authFunctions = require('../../helper/authFunctions');

module.exports = {
    all: async (req, res, next) => {
        try {
            const allUsers = await User.getUsers()
            if (allUsers) {
                return res.status(200).json({
                    status: 'success',
                    users: allUsers
                });
            }
        } catch (error) {
            next(createError(404, 'User Not Found', { status: "error" }))
        }
    },
    create: async (req, res, next) => {
        try {
            const {
                email
            } = req.body;
            const userExist = await User.findUserByEmail(email)
            if (!userExist) {
                const newUser = await storeUser(req.body)
                if (newUser) {
                    return res.status(200).json({
                        status: 'success',
                        msg: `${req.body.name} is register successfully`
                    });
                }
            }else{
                console.log('duplicate')
            }
        } catch (error) {
            console.log(error)
        }
    }
}