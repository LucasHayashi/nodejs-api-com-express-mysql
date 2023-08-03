const express = require("express");
const router = express.Router();
const cliente = require("../controller/clientes.controller");

router
  .get("/", cliente.buscarTodosClientes)
  .get("/:id", cliente.buscarClientePorId)
  .post("/", cliente.salvarCliente)
  .delete("/:id", cliente.excluirCliente)
  .put("/:id", cliente.atualizarCliente);

module.exports = router;
