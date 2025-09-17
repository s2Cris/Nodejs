import express from "express";

const router = express.Router();

//listar categoria
router.get("/", async (req, res)=> {  // router - rota | "/" - rota raiz | render - montar/construir
    res.render("base", {
        title: "Listar Categorias",
        view: "categorias/show",
    })
});

//edit categoria
router.get("/edit", async (req, res)=> {  // router - rota | "/edit" - rota atual | render - montar/construir
    res.render("base", {
        title: "Editar Categorias",
        view: "categorias/edit",
    })
});

//add categoria
router.get("/add", async (req, res)=> {  // router - rota | "/add" - rota atual | render - montar/construir
    res.render("base", {
        title: "Add Categorias",
        view: "categorias/add",
    })
});

export default router;
