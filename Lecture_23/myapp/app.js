import express from 'express';
import web from './routes/web.js';
import cookieParser from 'cookie-parser';

const app = express()
const port = process.env.PORT || '3000';

app.use(cookieParser())
app.use('/', web)

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})
