import express from 'express';
import { countSession, delSession, getSession, regnSession } from '../controllers/sessionController.js';

const web = express.Router();

web.get('/get', getSession)
web.get('/del', delSession)
web.get('/regn', regnSession)
web.get('/cns', countSession)

export default web