const { model } = require('mongoose')
const validator = require('validator')

//student model
const Student = model('Student', {
    firstName: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Name is not valid')
            }
        }
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Name is not valid')
            }
        }
    },
    googleID: Number,
    mobile: {
        type: Number,
        valiDate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Invalid Phone No')
            }
        }
    },
    profilePic: String,
    password:
    {
        type: String,
        trim: true,
        minlength: 8,
        validate(value) {
            const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
            if (!strongRegex.test(value)) {
                throw new Error('Password must be strong')
            }
        }
    },
    department: {
        type: String,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email address is not valid')
            }
        }
    },
    dateJoined: {
        type: Date,
        default: Date.now()
    },
    avatar: Buffer
})

module.exports = Student