import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt';

const resultController = async (req, res) => {
    try {
        const result = await userModel.findOne({email: req.body.email})
        if(result.email != undefined){
            const isMatch = await bcrypt.compare(req.body.password, result.password)
            if(result.email == req.body.email && isMatch){
                res.render('loginresult', {title: 'Result', result: result})
            } else {
                res.render('loginresult', {title: 'Result', result: 'Wrong Email or Password'})
            }
        } else {
            res.render('loginresult', {title: 'Result', result: 'You Are Not Registered'})
        }
    } catch (error) {
        console.log(error)   
    }
}

export {resultController}