module.exports = {
  index: (req, res) => {
    return res.render("index", {
      title: "TorreMarvel",
    });
  },
  contactos: (req, res) => {
    return res.render("contactos", {
      title: "contactos",
    });
  },
  nosotros: (req, res) => {
    return res.render("sobrenosotros", {
      title: "Torre Marvel",
    });
  },
  novedades: (req, res) => {
    return res.render("novedades", {
      title: "novedades",
    });
  }
}
