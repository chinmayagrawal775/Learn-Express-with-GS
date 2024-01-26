import express from 'express';
import { contactController } from '../controllers/contactController.js';
import { indexController } from '../controllers/indexController.js';
import { serviceController } from '../controllers/serviceController.js';
import { skillController } from '../controllers/skillController.js';

const route = express.Router();

route.get('/', indexController)
route.get('/service', serviceController)
route.get('/skill', skillController)
route.get('/contact', contactController)

export default route;