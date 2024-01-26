import express from "express"
import student from "./routes/web.js"
const app = express()

const port = 3000

app.use('/student', student)

app.listen(port, () => {
console.log(`Example app listening on http://localhost:${port}`)
})