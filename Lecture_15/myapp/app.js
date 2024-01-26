import express from 'express';
import connectDB from './db/connectdb.js';

const app = express();

const port = process.env.PORT || '3000';

const DATABASE_URL = process.env.PORT || "mongodb://localhost:27017/schooldb";

connectDB(DATABASE_URL)

app.listen(port, () => {
    console.log(`server running at http://locahost:${port}`)
})