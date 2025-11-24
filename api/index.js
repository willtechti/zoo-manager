const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Banco de dados em memória
let animais = [];
let cuidados = [];
let proxIdAnimal = 1;
let proxIdCuidado = 1;

// ---------- ROTAS DE ANIMAIS ----------

app.get("/animais", (req, res) => {
  res.json(animais);
});

app.post("/animais", (req, res) => {
  const novoAnimal = {
    id: proxIdAnimal++,
    nome: req.body.nome,
    descricao: req.body.descricao,
    dataNascimento: req.body.dataNascimento,
    especie: req.body.especie,
    habitat: req.body.habitat,
    paisOrigem: req.body.paisOrigem,
  };
  animais.push(novoAnimal);
  res.status(201).json(novoAnimal);
});

app.put("/animais/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = animais.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ message: "Animal não encontrado" });

  animais[index] = { ...animais[index], ...req.body };
  res.json(animais[index]);
});

app.delete("/animais/:id", (req, res) => {
  const id = Number(req.params.id);
  animais = animais.filter(a => a.id !== id);
  res.json({ message: "Animal removido" });
});

// ---------- ROTAS DE CUIDADOS ----------

app.get("/cuidados", (req, res) => {
  res.json(cuidados);
});

app.post("/cuidados", (req, res) => {
  const novoCuidado = {
    id: proxIdCuidado++,
    nome: req.body.nome,
    descricao: req.body.descricao,
    frequencia: req.body.frequencia,
  };
  cuidados.push(novoCuidado);
  res.status(201).json(novoCuidado);
});

app.put("/cuidados/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = cuidados.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).json({ message: "Cuidado não encontrado" });

  cuidados[index] = { ...cuidados[index], ...req.body };
  res.json(cuidados[index]);
});

app.delete("/cuidados/:id", (req, res) => {
  const id = Number(req.params.id);
  cuidados = cuidados.filter(c => c.id !== id);
  res.json({ message: "Cuidado removido" });
});

// ---------- INICIAR SERVIDOR ----------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
