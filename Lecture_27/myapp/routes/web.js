import express from 'express';
import { createController } from '../controllers/createController.js';
import { indexController } from '../controllers/indexController.js';
import { loginController } from '../controllers/loginController.js';
import { registrationController } from '../controllers/registrationController.js';
import { resultController } from '../controllers/resultController.js';

const web = express.Router();

web.get('/', indexController)
web.get('/registration', registrationController)
web.post('/registration', createController)
web.post('/loginresult', resultController)
web.get('/login', loginController)

export default web