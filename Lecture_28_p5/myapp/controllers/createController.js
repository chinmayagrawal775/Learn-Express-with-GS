import studentModel from "../models/studentModel.js"

const createController = async (req, res) => {
    try {
        const doc = studentModel({
            name: req.body.name,
            age: req.body.age
        })
        await doc.save()
        res.status(201).send('data added')
    } catch (error) {
        console.log(error)
    }
}

export {createController}