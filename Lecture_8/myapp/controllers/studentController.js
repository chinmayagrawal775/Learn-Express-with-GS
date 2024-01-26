import {join} from 'path';

const student = (req, res) => {
    res.sendFile(join(process.cwd(), "views", "index.html"))
}

export {student}