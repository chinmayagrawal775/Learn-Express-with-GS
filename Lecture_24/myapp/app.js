import express from 'express';
import web from './routes/web.js';
import session from 'express-session';

const app = express();
const port = process.env.PORT || '3000';

app.use(session({
    secret: 'mykey',
    resave: false,
    saveUninitialized: true
}))

app.use('/session', web)

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})