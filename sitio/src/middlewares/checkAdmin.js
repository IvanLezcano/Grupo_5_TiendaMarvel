function checkAdmin(req,res,next) {
    if (req.session.user == undefined) {
        return res.redirect('/')
    }
    if (req.session.user.rol === 'usuario') {
        return res.redirect('/')
    }
        next()
    
}

module.exports= checkAdmin;