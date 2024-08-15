const pool = require("./db.service");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

async function criarUsuario(usuario) {
  try {
    const senha = usuario.senha;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(senha, salt);

    const sql = "INSERT INTO usuarios(nome,senha,email) VALUES (?,?,?);";
    const values = [usuario.nome, hash, usuario.email];
    await pool.query(sql, values);
  } catch (error) {
    throw new Error("Erro ao salvar usuario: " + error.message);
  }
}

async function autenticar(usuario) {
  try {
    const user = usuario.email;

    const sql = "SELECT * FROM usuarios WHERE email = ?";
    const values = [user];
    const res = await pool.query(sql, values);

    if (res.length > 1) {
      const hash = res[0][0].Senha;
      const senha = usuario.senha;
      const match = await bcrypt.compare(senha, hash);

      if (match) {
        delete res[0][0].Senha;
        const payload = res[0][0];

        const token = jwt.sign(payload, 'senha_secreta', { expiresIn: '1m' });

        return token;

      } else {
        return new Error("Senha incorreta");
      }
    } else {
      return new Error("Não existe nenhum usuário com o e-mail informado");
    }
  } catch (error) {
    return new Error("Erro ao fazer o login: " + error.message);
  }
}

module.exports = {
  criarUsuario,
  autenticar
};
