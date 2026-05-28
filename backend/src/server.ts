// const express = require("express");
import express, { type Request, type Response } from "express";
import { dbConnection } from "./conf/mongoDB.ts";
import routes from "./routes/index.routes.ts";
import errorHandler from "./middlewares/errorHandler.ts";

const  server = express();
server.use(express.json());
server.use(errorHandler);

server.use('/api/v1', routes);


server.use((req: Request, res: Response)=>{
    res.status(404).json({
        error: "Route not found"
    })
})

// conexion db
// congiguracion globales
// rutas
dbConnection();

export default server
