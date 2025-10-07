// Importa a instância do Realtime Database já inicializada (config/firebase.js)
import { db } from "../config/firebase.js";

// Importa funções do Web SDK do Realtime Database usadas no CRUD
import { ref, push, set, onValue } from "firebase/database";

// Cria uma referência "raiz" para o nó/coleção "alunos" no banco
const rootRef = ref(db, "alunos");

// Exporta o controller como módulo ES (usado nas rotas)

  // [READ] Lista todas os alunos  
  export function list(req, res) {
    const alunosRef = ref(db, "alunos");
    onValue(alunosRef, (snapshot) => {
      const data = snapshot.val();
      const alunos = data ? Object.values(data) : [];
      res.render("base", {
        title: "Lista de Alunos",
        view: "alunos/show", 
        alunos 
      });
    }, {onlyOnce: true})
  }

  // Mostra o formulário de criação
  export function createForm(req, res) {
    // Apenas renderiza a página de criação
    res.render("base", {
      title: " Adicionar Alunos",
      view: "alunos/add",
    });
  }

  // [CREATE - ACTION] Cria um aluno novo
  export async function create(req, res) {
    try {
      const { nome, descricao } = req.body;
      const alunosRef = ref(db, "alunos");
      const novo = push(alunosRef); // Cria um novo registro com ID único
        await set(novo, { nome, descricao }); // Salva os dados no DB 
          res.redirect("/alunos");  
    } catch (e) {
      console.error("Erro ao realizar cadastro de aluno", e);
      res.status(500).send("Erro ao cadastrar aluno");
    }
   
  }

  // [UPDATE - FORM] Carrega dados para edição de uma categoria específica

  // [UPDATE - ACTION] Salva a edição de uma categoria

  // [DELETE] Remove uma categoria pelo id
