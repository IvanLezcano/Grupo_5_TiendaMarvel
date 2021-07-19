const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static('../public'));
app.set("view engine", "ejs");		
app.set("views", path.join(__dirname, "views"));			


app.get("/", (req, res) =>
  res.render("index")
);

app.get("/carrito", (req, res) =>
  res.render("carrito")
);
app.get("/descripcion-producto", (req, res) =>
  res.render("descripcion-producto.ejs")
);

app.get("/registro", (req, res) =>
  res.render("registrarse.ejs")
);
app.get("/login", (req, res) =>
  res.render("login.ejs")
);
app.get("/kids", (req, res) =>
  res.render("kids.ejs")
);
app.get("/quiz", (req, res) =>
  res.render("quiz.ejs")
);
app.get("/novedades", (req, res) =>
  res.render("novedades.ejs")
);
app.get("/nosotros", (req, res) =>
  res.render("sobrenosotros.ejs")
);
app.get("/productos", (req, res) =>
  res.render("productos.ejs")
);
app.get("/carrito", (req, res) =>
  res.render("carrito.ejs")
);
app.get("/descripcion", (req, res) =>
  res.render("descripcion-producto.ejs")
);
app.get("/cargadeproducto", (req, res) =>
  res.render("cargadeproducto.ejs")
);
app.get("/modificar", (req, res) =>
  res.render("modificarproducto.ejs")
);
app.get("/contacto", (req, res) =>
  res.render("contactos.ejs")
);
app.get("/carga", (req, res) =>
  res.render("modificarproducto.ejs")
);
app.get("/modificar", (req, res) =>
  res.render("cargadeproducto.ejs")
);
  app.listen(port, () =>
  console.log("Server runing in http://localhost:" + port)
);
