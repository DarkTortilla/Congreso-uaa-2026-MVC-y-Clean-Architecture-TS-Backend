# Fundamentos de la clase 1

Este documento resume los conceptos fundamentales vistos en la primera clase del taller de MVC con TypeScript, enfocada en la configuracion inicial y los primeros modelos con MongoDB.

## Que es una arquitectura
Una arquitectura describe como se organiza un sistema de software, definiendo sus piezas principales y la forma en que se comunican.

### Componentes
Son las partes del sistema con responsabilidades claras (por ejemplo: controladores, servicios, modelos, rutas).

### Conectores
Son los mecanismos que permiten que los componentes se comuniquen entre si (por ejemplo: llamadas HTTP, eventos, funciones, middlewares).

### Datos
Es la informacion que fluye entre los componentes y se almacena en el sistema (por ejemplo: documentos en una base de datos).

## Arquitectura cliente-servidor
Se basa en la separacion de responsabilidades: el cliente solicita recursos y el servidor responde.

### Req y res
- `req` representa la solicitud que envia el cliente.
- `res` representa la respuesta que construye el servidor.

### Importancia del protocolo HTTP
HTTP define reglas claras para comunicacion entre cliente y servidor, incluyendo metodos, codigos de estado y formato de datos.

## APIs REST
Una API REST organiza endpoints alrededor de recursos, usando HTTP para operaciones como crear, leer, actualizar y eliminar datos.

## Descripcion breve de lo que hemos visto hasta ahora
- Configuracion inicial del proyecto con TypeScript.
- Estructura base del backend y separacion de carpetas.
- Conexion a MongoDB.
- Modelos iniciales para `User` y `Major`.

## TypeScript
Lenguaje tipado que se compila a JavaScript. Permite detectar errores antes de ejecutar y mejora el mantenimiento del codigo.

## MongoDB
Base de datos NoSQL orientada a documentos. Usa colecciones y documentos en formato JSON (BSON).

## Express
Framework minimalista para Node.js que facilita la creacion de servidores y rutas HTTP.
