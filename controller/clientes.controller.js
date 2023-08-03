const db = require("../services/clientes.service");

async function buscarTodosClientes(req, res) {
  try {
    const results = await db.selectCustomers();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function buscarClientePorId(req, res) {
  try {
    const result = await db.selectCustomer(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function salvarCliente(req, res) {
  try {
    await db.insertCustomer(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function atualizarCliente(req, res) {
  try {
    await db.updateCustomer(req.params.id, req.body);
    res.status(200).json({
      message: "Cliente atualizado com sucesso!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function excluirCliente(req, res) {
  try {
    await db.deleteCustomer(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  buscarTodosClientes,
  buscarClientePorId,
  salvarCliente,
  atualizarCliente,
  excluirCliente,
};
