import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
    res.send('teahcer')
})


route.get('/all', (req, res) => {
    res.send('all teacher')
})

route.get('/write', (req, res) => {
    res.send('write teacher')
})

route.get('/delete', (req, res) => {
    res.send('delete teacher')
})

export default route;