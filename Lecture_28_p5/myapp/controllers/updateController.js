import studentModel from "../models/studentModel.js";

const updateController = async (req, res) => {
    try {
        await studentModel.findByIdAndUpdate(req.params.id, req.body)
        res.send('updated')
    } catch (error) {
        console.log(error)
    }
}

export {updateController}