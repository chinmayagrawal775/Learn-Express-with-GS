import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'

const createController = async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    try {
        const doc = new userModel({
            name: req.body.name,
            password: hashPassword,
            email: req.body.email
        })
        await doc.save()
        res.redirect('/login')
    } catch (error) {
        console.log(error)
    }
}

export {createController}