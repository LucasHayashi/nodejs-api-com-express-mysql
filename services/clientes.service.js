const pool = require("../services/db.service");

async function selectCustomers() {
  try {
    const res = await pool.query("SELECT * FROM clientes");
    return res[0];
  } catch (error) {
    throw new Error("Erro ao buscar clientes: " + error.message);
  }
}

async function selectCustomer(id) {
  try {
    const res = await pool.query("SELECT * FROM clientes WHERE ID=?", [id]);
    return res[0];
  } catch (error) {
    throw new Error("Erro ao buscar o cliente por ID: " + error.message);
  }
}

async function deleteCustomer(id) {
  try {
    return await pool.query("DELETE FROM clientes where id=?;", [id]);
  } catch (error) {
    throw new Error("Erro ao excluir cliente: " + error.message);
  }
}

async function insertCustomer(customer) {
  try {
    const sql = "INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);";
    const values = [customer.nome, customer.idade, customer.uf];
    await pool.query(sql, values);
  } catch (error) {
    throw new Error("Erro ao salvar cliente: " + error.message);
  }
}

async function updateCustomer(id, customer) {
  try {
    const sql = "UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?";
    const values = [customer.nome, customer.idade, customer.uf, id];
    await pool.query(sql, values);
  } catch (error) {
    throw new Error("Erro ao atualizar cliente: " + error.message);
  }
}

module.exports = {
  selectCustomers,
  selectCustomer,
  deleteCustomer,
  insertCustomer,
  updateCustomer,
};
