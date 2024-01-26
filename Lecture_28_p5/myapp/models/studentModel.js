import mongoose from "mongoose";

const apiSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
})

const studentModel = mongoose.model('api-data', apiSchema)

export default studentModel;