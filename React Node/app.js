const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public"))); //arquivos estaticos (css, js, imagens)

//configuração do EJS como view
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

//Rota de categoria
const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter); //todas as rotas que comecarem com /categoria vao ser direcionadas para o categoriaRouter

//Rota de alunos
const alunosRouter = require("./routes/alunos");
app.use("/alunos", alunosRouter);

//Rota de cursos
const cursosRouter = require("./routes/cursos");
app.use("/cursos", cursosRouter);

const equipeRouter = require("./routes/equipe");
app.use("/equipe", equipeRouter);

//rodar o server
app.listen(3000, () => {
    console.log("Servidor em execução - porta 3000");
});

//