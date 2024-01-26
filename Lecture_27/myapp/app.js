import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDb from './db/dbConnect.js';
import web from './routes/web.js';

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL;

connectDb(DATABASE_URL)

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({extended: false}))
app.use('/', web)

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})