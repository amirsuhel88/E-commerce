const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String ,
        required: [true, "Please Enter your Name"], 
        maxLength: [30, "Name can not exceed 30 characters"],
        minLength: [4,"Name shoud have more than 4 characters"],
    }, 
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true, 
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String, 
        required: [true, "Please enter your password"],
        minLength: [8, "Password lenght should have at least 8 characters long"],
        select: false,
    },
    avtar:{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

module.exports = mongoose.model("user", userSchema)

