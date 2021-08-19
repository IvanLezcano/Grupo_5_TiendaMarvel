const { usuarios } = require("../data/user_db");
function userLog(req,res,next) {
    res.locals.isLogged = false
    let emailFromCookie = req.cookies.userEmail;
    let userCheckCookie = usuarios.find(user=> user.email === emailFromCookie)
    if (userCheckCookie) {
        req.session.user = userCheckCookie
    }
    
    if (req.session.user) {
        res.locals.isLogged= true;
        res.locals.user = req.session.user
    }
    next()
}

module.exports= userLog;