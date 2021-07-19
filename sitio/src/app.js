const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static('../public'));
app.set("view engine", "ejs");		


const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users"); 
const playsRouter = require("./routes/plays"); 

app.use("/", indexRouter);
app.use("/productos", productsRouter);
app.use("/users", usersRouter);  
app.use("/plays", playsRouter);  

app.listen(port, () =>
  console.log("Server runing in http://localhost:" + port)
);
