import express from 'express';
import { delCookie, getCookie, setCookie } from '../controllers/cookieController.js';

const web = express.Router();

web.get('/getcookie', getCookie)
web.get('/setcookie', setCookie)
web.get('/delcookie', delCookie)

export default web;