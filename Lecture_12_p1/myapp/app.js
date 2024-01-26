import express from 'express';
import web from './routes/web.js';

const app = express();

const port = process.env.PORT || '3000';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'))

app.use('/', web)

app.listen(port, () => {
    console.log(`Server Runing @ http://localhost:${port}`)
})