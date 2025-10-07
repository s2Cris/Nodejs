import express from "express";
import * as alunosController from "../controllers/alunosController.js";

const router = express.Router();

//listar aluno
router.get("/", alunosController.list);

//edit aluno
router.get("/edit", async (req, res)=> {  // router - rota | "/edit" - rota atual | render - montar/construir
    res.render("base", {
        title: "Editar Alunos",
        view: "alunos/edit",
    })
});

//add aluno
router.get("/add", alunosController.createForm);

router.post("/add", alunosController.create);

export default router;