import express from 'express';
import { countSession } from '../controllers/sessionController.js';

const web = express.Router();

web.get('/cns', countSession)

export default web