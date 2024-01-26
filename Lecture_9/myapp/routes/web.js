import express, { application } from "express";
import { about } from "../controllers/about.js";

const route = express.Router();

route.get('/about', about);

export default route