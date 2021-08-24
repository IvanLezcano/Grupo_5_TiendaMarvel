function authMiddleware(req, res, next) {
  if (!req.session.user) {
    //si no tengo a nadie en session
    return res.redirect("/users/login"); //lo redirijo a login
  }
  next(); // si tengo a alguien, que siga la peticion
}

module.exports = authMiddleware;
