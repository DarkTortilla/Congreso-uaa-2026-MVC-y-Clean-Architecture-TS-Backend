// const express = require("express");
import express from "express";
import { dbConnection } from "./conf/mongoDB.ts";

const  server = express();
// conexion db
// congiguracion globales
// rutas
dbConnection();

export default server;
