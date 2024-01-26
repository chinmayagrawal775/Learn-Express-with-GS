import express from 'express';
import { student } from './controllers/studentController.js';
const route = express.Router();

route.get('/', student)

export default route;