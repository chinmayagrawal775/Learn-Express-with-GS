import express from "express"
import route from "./routes/web.js"
import {join} from 'path'

const app = express()

const port = process.env.PORT || '3000'

const options = {
    dotfiles: "ignore"
}

app.use(express.static(join(process.cwd(), 'public'), options))

app.use('/', route)

app.listen(port, () => {
console.log(`Example app listening on http://localhost:${port}`)
})