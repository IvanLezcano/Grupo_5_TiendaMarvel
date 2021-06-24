const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static('public'));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

<<<<<<< HEAD
app.get("/carrito", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views" , "carrito.html"))
);
app.get("/descripcion-producto", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "descripcion-producto.html"))
);

=======
app.get("/registro", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "registro.html"))
);
// app.get("/login", (req, res) =>
//   res.sendFile(path.join(__dirname, "views", "login.html"))
// );
>>>>>>> 0b0dfefd5687ad0e12cc1cd418882f1e5bcc0af9
app.listen(port, () =>
  console.log("Server runing in http://localhost:" + port)
);
