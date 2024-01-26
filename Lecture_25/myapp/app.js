import express from 'express';
import web from './routes/web.js';
import session from 'express-session';
import connectDb from './db/dbConnect.js';
import MongoStore from 'connect-mongo';

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'

connectDb(DATABASE_URL)

const sessionStorage = MongoStore.create({
    mongoUrl: DATABASE_URL,
    dbName: 'sessiondb',
    collectionName: 'sessions',
    ttl: 14*24*60*60,
    autoRemove: 'native'
})

app.use(session({
    name: 'geeksession',
    secret: 'mykey',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:50000},
    store: sessionStorage
}))

app.use('/session', web)

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})