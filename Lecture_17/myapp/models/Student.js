import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
})

console.log(studentSchema.path('age'))

const studentModel = mongoose.model('student', studentSchema)