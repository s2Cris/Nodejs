const express = require("express");
const path = require("path");
const app = express();
//configuração do EJS como view
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);
//Rotas de categoria
const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter); //todas as rotas que comecarem com /categoria vao ser direcionadas para o categoriaRouter
//rodar o server
app.listen(3000, () => {
    console.log("Servidor em execução - porta 3000");
});