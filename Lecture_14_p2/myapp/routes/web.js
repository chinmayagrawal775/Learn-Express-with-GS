import express from 'express';
import { contactController } from '../controllers/contactController.js';
import { indexController } from '../controllers/indexController.js';
import { studentController } from '../controllers/studentController.js';

const route = express.Router();

route.get('/', indexController)
route.get('/contact', contactController)
route.get('/student', studentController)

export default route