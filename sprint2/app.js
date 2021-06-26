const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.get("/registrarse", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "registrarse.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);
app.listen(3010, () =>
  console.log("Server runing in http://localhost:" + port)
);
