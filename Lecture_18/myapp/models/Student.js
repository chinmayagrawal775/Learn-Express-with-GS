import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
})

const studentModel = mongoose.model('student', studentSchema)

const createDoc = async () => {
    try {
        const studentDoc = new studentModel({
            name: 'geek3',
            age: 20
        })

        const studentDoc1 = new studentModel({
            name: 'geek4',
            age: 20
        })

        const studentDoc2 = new studentModel({
            name: 'geek5',
            age: 20
        })
        
        const result = await studentModel.insertMany([studentDoc, studentDoc1, studentDoc2])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export default createDoc