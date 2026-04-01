const express = require("express");
const cors = require("cors");

const app = express();

/* =========================
   CONFIGURAÇÕES
========================= */
app.use(cors());
app.use(express.json());


/* =========================
   ROTA DE CONTATO
========================= */
app.post("/contato", (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({
      msg: "Preencha todos os campos!"
    });
  }

  console.log("📩 Novo contato recebido:");
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Mensagem:", mensagem);

  return res.json({
    msg: "Mensagem enviada com sucesso!"
  });
});


/* =========================
   SERVIDOR
========================= */
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});