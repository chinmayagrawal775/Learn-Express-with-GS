import studentModel from "../models/studentModel.js";

const readController = async (req, res) => {
    try {
        const result = await studentModel.find()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

export {readController}