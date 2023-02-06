const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { userImage } = require('../config/DefaultUserImage');
const authFunctions = require('../helper/authFunctions');

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    address: {
        type: Schema.Types.String,
        required: true,
    },
    education_qualification: {
        type: Schema.Types.String,
        required: true,
    },
    dob: {
        type: Schema.Types.Date,
        required: true,
    },
    job_title: {
        type: Schema.Types.String,
        required: true,
    },
    photo: {
        type: Schema.Types.String,
        required: false,
        default: userImage
    },
    contact_number: {
        type: Schema.Types.Number,
        required: true,
    },
}, { timestamps: true })

const User = mongoose.model('users', userSchema)

module.exports = {
    getUsers: () => User.find(),
    storeUser: async userData => {
        const hashPassword = await authFunctions.createPassword(userData.password)
        const user = {
            name: userData.name,
            email: userData.email,
            password: hashPassword,
            address: userData.address,
            contact_number: userData.contact_number,
            education_qualification: userData.education_qualification,
            dob: userData.dob,
            job_title: userData.job_title
        }
        return new User(user).save();
    },
    updateUser: (userData, userId) => User.findByIdAndUpdate(userId, userData),
    findUserById: userId => User.findById(userId),
    findUserByEmail: userEmail => User.findOne({ email: userEmail }).exec(),
    deleteUser: userId => User.findByIdAndRemove(userId),
    removeUsers: () => User.deleteMany()

}

