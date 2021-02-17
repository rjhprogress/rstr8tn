const mongoose = require('mongoose')
const crypto = require('crypto')
const { S_IFIFO } = require('constants')

// user schema
const userScheama = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true, \
        min: 3,
        max: 32
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    }

    hashed_password: {
        type: String,
        required: true,
    }

    salt: String,
    role: {
        type: String,
        default: 'subscriber'
    }
    
    resetPasswordLink: {
        data: String,
        default: 'subscriber'
    }



}, { timestamps: true })


//virtual 
userScheama.virtual('password')
    .set(function (password) {
        this_password = password
        this.salt = this.makeSalt()
        this.hashed.password = this.encryptPassword(password)
    })

    .get(function () {
        return this_password
    })


//methods
userScheama.methods = {


    authenticate: function (plainText) {
        return this.encryptPassword(plainText) ===
            this.hased_password;
    }


    encryptPassword: function (password) {
        if (!password) return ''
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');

        } catch (err) {
            return ''
        }
    }

makeSalt: function () {
        return Match.round(new Date().valueOf() * Math.random()) + ''

    }
}