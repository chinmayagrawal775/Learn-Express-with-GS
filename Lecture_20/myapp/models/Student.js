import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
})

const studentModel = mongoose.model('student', studentSchema)

const updateDoc = async (id) => {
    const result = await studentModel.findByIdAndUpdate(id, {name:'geekyy'})
    console.log(result)
}

export {updateDoc}