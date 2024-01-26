const aboutController = (req, res) => {
    const data ={
        'creator': 'geek',
        'marks': [10,20,30,40,50]
    }
    res.render('about', data)
}

export {aboutController}