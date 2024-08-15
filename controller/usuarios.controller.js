const db = require("../services/usuarios.service");

async function inicio(req, res) {
  res.json({ message: "Bem-vindo ao sistema de usuários" });
}

async function registrar(req, res) {
  try {
    const results = await db.criarUsuario(req.body);
    res.status(200).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const result = await db.autenticar(req.body);
    if (!result) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.status(200).json({ token: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  inicio,
  registrar,
  login
};
