import express from 'express';
import route from './routes/web.js';
import {join} from 'path';

const app = express();

const port = process.env.PORT || '3000';

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static(join(process.cwd(), 'public')))

app.use('/', route)

app.listen(port, () => {
    console.log(`Server running a http://localhost:${port}`)
})