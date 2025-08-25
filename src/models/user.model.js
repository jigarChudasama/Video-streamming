import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            trim : true ,
            index : true,
            lowercase : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            trim : true ,
            lowercase : true
        },
        fullname : {
            type : String,
            required : true,
            trim : true ,
            index : true,
        },
        avatar : {
            type : String,
            required : true,
        },
        coverImage : {
            type : String,
        },
        watchHistory : [
            {
                type: Schema.Types.ObjectId,
                ref : 'Video'
            }
        ],
        password : {
            type : String,
            required : [true , "password is required"]
        },
        refrashTokan : {
            type : String
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre('save' , function () {

    if(!this.isModified('password')) return next() 

    this.password = bcrypt.hash(this.password , 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password , this.password )
}

export const User = mongoose.model("User", userSchema)