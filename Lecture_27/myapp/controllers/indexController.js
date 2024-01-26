const indexController = (req, res) => {
    res.render('index', {title: 'Home'})
}

export {indexController}