import express from 'express';
import connectDb from './db/dbConnect.js';
import web from './routes/web.js';

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

connectDb(DATABASE_URL)

app.use(express.json())

app.use('/', web)

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})