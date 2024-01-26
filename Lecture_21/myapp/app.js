import express from 'express';
import connectDB from './db/connectdb.js';
import { deleteDoc } from './models/Student.js';

const app = express();

const port = process.env.PORT || '3000';

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

connectDB(DATABASE_URL)

deleteDoc('6336efa0977428f979cb6120')

app.listen(port, () => {
    console.log(`server running at http://localhost${port}`)
})