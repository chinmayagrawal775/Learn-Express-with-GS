import express from "express";

const app = express();

const port = process.env.PORT || '3000';

app.get('/student/:id', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`hello student ${req.params.id} ${req.query.name}`)
})

app.listen(port, () => {
    console.log(`Server Listening @ http://localhost:${port}`)
})