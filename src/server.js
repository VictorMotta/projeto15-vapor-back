import express from "express";
import cors from "cors";

const port = process.env.PORT || 5000;

const server = express();
server.use(cors());
server.use(express.json());

server.use([AuthRouter, ProductsRouter]);

server.listen(port, console.log(`Servidor iniciado com sucesso! Na porta: ${port}`));
