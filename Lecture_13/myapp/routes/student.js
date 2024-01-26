import express from 'express';
import { studentController } from '../controllers/studentController.js';
import myLogger from "../middlewares/logger-middleware.js";

const route = express.Router();

route.use(myLogger)

route.get('/student', studentController)

export default route