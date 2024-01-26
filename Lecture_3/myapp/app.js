import express from "express";

const app = express();

const port = process.env.PORT || '3000';

app.get('/', (req, res) => {
    res.send('hello geek')
})

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})