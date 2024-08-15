require("dotenv").config();

const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT;

const clientes = require('./routes/clientes.route');
const usuarios = require('./routes/usuarios.route');
const { middlewareValidarJWT } = require("./middlewares/middleware");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Rota raiz funcionando!" });
});

app.use('/clientes', middlewareValidarJWT, clientes)
app.use('/usuarios', usuarios)

//inicia o servidor
app.listen(port, () => {
    console.log('API funcionando!');
});