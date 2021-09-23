function userLog(req,res,next) {
    res.locals.isLogged = false
    if(req.cookies.user){
        res.locals.isLogged= true;
        req.session.userLogin = req.cookies.user;
        res.locals.userLogin = req.session.userLogin
        next()
    }else if (req.session.userLogin) {
        res.locals.isLogged= true;
        res.locals.userLogin = req.session.userLogin
        next()
    }
    next()
}

module.exports= userLog;