const indexController = (req, res) => {
    res.render('index', {title: 'home'})
}

export {indexController}