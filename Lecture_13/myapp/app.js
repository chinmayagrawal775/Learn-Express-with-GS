import express from "express"
import myLogger from "./middlewares/logger-middleware.js"
import web from './routes/web.js'
import student from './routes/student.js'

const app = express()

const port = process.env.PORT || '3000'

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/contact', myLogger)
app.use('/', web)
app.use('/', student)

app.listen(port, () => {
console.log(`Example app listening on http://localhost:${port}`)
})