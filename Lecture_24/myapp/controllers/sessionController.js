const getSession = (req, res) => {
    console.log(req.session)
    console.log(req.session.id)
    res.send('session get')
}

const delSession = (req, res) => {
    req.session.destroy(() => {
        console.log("session deleted")
    })
    res.send('session del')
}

const regnSession = (req, res) => {
    req.session.regenerate(() => {
        console.log("session regn")
    })
    res.send('session regn')
}

const countSession = (req, res) => {
    if(req.session.count){
        req.session.count++
    } else {
        req.session.count = 1
    }
    res.send(`count ${req.session.count}`)
}

export {getSession, delSession, regnSession, countSession}