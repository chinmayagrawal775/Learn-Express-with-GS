import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
})

const studentModel = mongoose.model('student', studentSchema)

const retriveDoc = async () => {
    const result = await studentModel.find({}, null, {limit:4, skip:1})
    console.log(result)
}

export {retriveDoc}