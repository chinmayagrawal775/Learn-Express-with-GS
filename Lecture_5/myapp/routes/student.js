import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
    res.send('student')
})

route.get('/all', (req, res) => {
    res.send('all student')
})

route.get('/write', (req, res) => {
    res.send('write student')
})

route.get('/delete', (req, res) => {
    res.send('delete student')
})

export default route;