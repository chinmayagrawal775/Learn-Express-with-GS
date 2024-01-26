import express from "express"
import uc from "./middlewares/uc-middleware.js"
import web from './routes/web.js'

const app = express()

const port = process.env.PORT || '3000'

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/student', uc)
app.use('/', web)

app.listen(port, () => {
console.log(`Example app listening on http://localhost:${port}`)
})