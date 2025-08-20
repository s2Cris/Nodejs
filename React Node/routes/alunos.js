    // Rotas de Categoria
const express = require("express");
const router = express.Router();

//listar categoria
router.get("/", async (req, res)=> {  // router - rota | "/" - rota raiz | render - montar/construir
    res.render("base", {
        title: "Listar Alunos",
        view: "alunos/show",
    })
});

//edit categoria
router.get("/edit", async (req, res)=> {  // router - rota | "/edit" - rota atual | render - montar/construir
    res.render("base", {
        title: "Editar Alunos",
        view: "alunos/edit",
    })
});

//add categoria
router.get("/add", async (req, res)=> {  // router - rota | "/add" - rota atual | render - montar/construir
    res.render("base", {
        title: "Adicionar Alunos",
        view: "alunos/add",
    })
});

module.exports = router;
