function checkSession(req,res,next) {
    
    if (req.session.user) {
        console.log('controlador: ',req.session.user);
        return res.redirect('/')
    } else {
        next()
    }
}

module.exports= checkSession;