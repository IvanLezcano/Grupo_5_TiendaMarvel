const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.get("/footer", (req, res) =>
  res.sendFile(path.join(__dirname, "public" , "header-footer", "footer.html"))
);
app.get("/header", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "header-footer", "header.html"))
);
app.get("/header", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "header-footer", "carrito.html"))
);

app.listen(port, () =>
  console.log("Server runing in http://localhost:" + port)
);
