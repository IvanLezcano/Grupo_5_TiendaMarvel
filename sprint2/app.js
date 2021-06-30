const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static('public'));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.get("/carrito", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views" , "carrito.html"))
);
app.get("/descripcion-producto", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "descripcion-producto.html"))
);

app.get("/registro", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "registrarse.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);
app.get("/kids", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "kids.html"))
);
app.get("/quiz", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "quiz.html"))
);
app.get("/novedades", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "novedades.html"))
);
app.get("/productos", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "productos.html"))
);
app.listen(port, () =>
  console.log("Server runing in http://localhost:" + port)
);
