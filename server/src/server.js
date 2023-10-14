// AQUI SE ENCUENTRA LA CONFIGURACIONN DE LOS MEDIWARE
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
 // medeware
server.use(morgan("dev"));// PARA VERIFICAR  LOS DATOS 
server.use(express.json());// TRADUCTOR DE CLIENTES A SERVIDO  
server.use(cors());

server.use(router);

module.exports = server;
