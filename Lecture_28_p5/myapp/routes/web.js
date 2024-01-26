import express from 'express';
import { createController } from '../controllers/createController.js';
import { deleteController } from '../controllers/deleteController.js';
import { readController } from '../controllers/readController.js';
import { updateController } from '../controllers/updateController.js';

const web = express.Router();

web.post('/create', createController)
web.get('/read', readController)
web.put('/update/:id', updateController)
web.delete('/delete/:id', deleteController)

export default web;