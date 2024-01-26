var myLogger = (req, res, next) => {
    console.log("looger")
    next()
}

export default myLogger