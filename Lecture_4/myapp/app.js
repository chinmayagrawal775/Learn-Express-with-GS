import express from 'express';

const app = express();

const port = process.env.PORT || '3000';

app.route('/stu')
.all((req, res, next) => {
    console.log("all")
    next()
})
.get((req, res) => {
    res.send("get")
})
.post((req, res) => {
    res.send("post")
})
.patch((req, res) => {
    res.send("patch")
})

app.listen(port, () => {
    console.log(`server running @ http://localhost:${port}`);
})