import {join} from 'path';

const about = (req, res) => {
    res.sendFile(join(process.cwd(), "views", "about.html"))
}

export {about}