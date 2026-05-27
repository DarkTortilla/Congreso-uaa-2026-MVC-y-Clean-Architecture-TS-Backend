// const express = require("express");
import express from "express";
import { dbConnection } from "./conf/mongoDB.ts";
import routes from "./routes/index.routes.ts";

const  server = express();
server.use(express.json());
server.use('/api/v1', routes);
// conexion db
// congiguracion globales
// rutas
dbConnection();

export default server
