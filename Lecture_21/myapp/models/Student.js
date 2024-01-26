import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
})

const studentModel = mongoose.model('student', studentSchema)

const deleteDoc = async (id) => {
    const result = await studentModel.findByIdAndDelete(id)
    console.log(result)
}

export {deleteDoc}