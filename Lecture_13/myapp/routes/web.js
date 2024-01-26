import express from 'express';
import { contactController } from '../controllers/contactController.js';
import { indexController } from '../controllers/indexController.js';

const route = express.Router();

route.get('/', indexController)
route.get('/contact', contactController)

export default route