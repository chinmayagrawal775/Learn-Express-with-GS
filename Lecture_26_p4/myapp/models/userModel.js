import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type:String},
    email: {type:String},
    password: {type:String}
})

const userModel = mongoose.model('user', userSchema)

export default userModel;