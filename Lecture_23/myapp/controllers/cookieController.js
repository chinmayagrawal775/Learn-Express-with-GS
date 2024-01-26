const setCookie = (req, res) => {
    res.cookie("username", 'geek')
    res.cookie("name", 'geeky', {maxAge: 10000})
    res.send('cookie set')
}

const getCookie = (req, res) => {
    console.log(req.cookies)
    res.send('cookie get')
}

const delCookie = (req, res) => {
    res.clearCookie("username")
    res.send('cookie del')
}

export {setCookie, getCookie, delCookie}