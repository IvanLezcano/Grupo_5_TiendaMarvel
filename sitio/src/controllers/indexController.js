module.exports = {
  index: (req, res) => {
    return res.render("index", {
      title: "TorreMarvel",
    });
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
