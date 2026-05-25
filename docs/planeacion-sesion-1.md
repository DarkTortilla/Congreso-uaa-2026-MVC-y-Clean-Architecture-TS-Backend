# Planeación de la primera clase

La primera sesión se enfocará en definir la arquitectura del proyecto. Se iniciará con la explicación formal de MVC y Clean Architecture, seguida de una introducción clara de MongoDB, Express y TypeScript como base tecnológica del backend.

La configuración básica del servidor se presentará con ejemplos concretos y se explicará su relación con la estructura del proyecto y la separación de responsabilidades.

## Objetivos de la sesión
1. Comprender el propósito de MVC y Clean Architecture en un backend.
2. Identificar el rol de MongoDB, Express y TypeScript dentro del proyecto.
3. Reconocer la estructura mínima del servidor y su configuración inicial.
4. Comprender la relación entre configuración, rutas y conexión a base de datos.

## Contenido principal
1. Definición de MVC y Clean Architecture.
2. Introducción a MongoDB, Express y TypeScript.
3. Configuración básica del servidor y explicación de su flujo.

## Ejemplo de configuración básica del servidor

```ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { dbConnection } from "./conf/mongoDB.ts";
import corsConfig from "./conf/cors.ts";
import routes from "./routes/index.ts";

dotenv.config();

const server = express();
server.use(cors(corsConfig));
server.use(express.json());
server.use("/api/v1", routes);

// Conexión a la base de datos
// Se recomienda invocar la conexión después de configurar middlewares y rutas.
// dbConnection();

export default server;
```

```ts
import { exit } from "node:process";
import server from "./server.ts";

const port = process.env.PORT;

server.listen(port, (error: any) => {
  if (error) {
    // TODO global error handler
    exit(1);
  }
  console.log(`server running at port ${port}`);
});
```

## Cierre y entregable de la sesión
1. Resumen de conceptos clave.
2. Documento breve con definición de MVC y Clean Architecture en contexto del taller.
3. Verificación de configuración base del servidor y comprensión del flujo.
