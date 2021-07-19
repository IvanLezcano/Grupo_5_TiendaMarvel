module.exports = {
  index: (req, res) => {
    return res.render("index");
  },
  contactos: (req, res) => {
    return res.render("contactos");
  },
  nosotros: (req, res) => {
    return res.render("sobrenosotros");
  },
  novedades: (req, res) => {
    return res.render("novedades");
  }
}
