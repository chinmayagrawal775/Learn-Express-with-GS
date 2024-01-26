import express from 'express';
import connectDB from './db/connectdb.js';

const app = express();

const port = process.env.PORT || '3000';

const DATABASE_URL = 'mongodb://localhost:27017';

connectDB(DATABASE_URL);

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})