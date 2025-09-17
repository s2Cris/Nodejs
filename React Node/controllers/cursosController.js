// Importa a instância do Realtime Database já inicializada (config/firebase.js)
import { db } from "../config/firebase.js";

// Importa funções do Web SDK do Realtime Database usadas no CRUD
import { ref, get, push, set, child, update, remove } from "firebase/database";

// Cria uma referência "raiz" para o nó/coleção "cursos" no banco
const rootRef = ref(db, "cursos");

// Exporta o controller como módulo ES (usado nas rotas)
export default {
  // [READ] Lista todas os alunos
  async list(req, res) {
    res.render("base", {
      title: "Adicionar Cursos",
      view: "cursos/add"
    });
  },

  // [CREATE - FORM] Mostra o formulário de criação (sem acessar o DB)
  createForm(req, res) {
    // Apenas renderiza a página de criação
    res.render("base", { 
      title: "Novo Curso",
      view: "cursos/add" 
    });
  },

  // [CREATE - ACTION] Cria um curso novo
  async create(req, res) {
    try {
    const { nome, descricao } = req.body;
    const novo = push(rootRef); // Cria um novo registro com ID único
    await set(novo, { nome }); // Salva os dados no DB 
      res.redirect("/cursos");  
    } catch (e) {
      console.error("Erro ao realizar cadastro de curso", e);
      res.status(500).send("Erro ao cadastrar curso");
      res.status(500).send("Erro ao cadastrar curso");
    }
   
  },

  // [UPDATE - FORM] Carrega dados para edição de uma categoria específica

  // [UPDATE - ACTION] Salva a edição de uma categoria

  // [DELETE] Remove uma categoria pelo id
};
