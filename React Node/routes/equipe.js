const express = require("express");
const router = express.Router();

//página inicial
router.get("/", async (req, res) => {  // router - rota | "/" - rota raiz | render - montar/construir
    res.render("base",{
        title: "Equipe",
        view: "equipe"
    });
    
});

module.exports = router;
