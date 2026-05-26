# Congreso-uaa-2026-MVC-y-Clean-Architecture-TS-Backend

Este repositorio sirve como guía académica para el taller de MVC y Clean Architecture aplicado al desarrollo de un backend con TypeScript. El objetivo es que el alumnado construya una API completa con autenticación basada en JWT, activación de cuenta por correo electrónico, validación de datos con express-validator, limitación de peticiones mediante rate limit, rutas protegidas y manejo global de errores.


## Herramientas y tecnologías
- TypeScript
- Express
- MongoDB
- JWT
- express-validator
- rate limit (limitación de peticiones)

## Estructura general del taller
El taller se desarrollará en tres sesiones de dos horas cada una, con una distribución de 30% teoría y 70% práctica.

1. **Sesión 1:** Introducción al proyecto, contexto MVC y Clean Architecture, estructura del backend, configuración inicial, conexión a la base de datos y primeros modelos.
2. **Sesión 2:** Construcción de la API base, modelos, controladores, rutas, validación con express-validator y limitación de peticiones.
3. **Sesión 3:** Autenticación JWT, activación de cuenta por correo electrónico, rutas protegidas, manejo global de errores y paginación en las consultas.

Modelos utilizados: `user`, `event` y `attendees`.

## Organización de carpetas
La estructura base del backend será la siguiente:

```
src
│
├── conf
├── controllers
├── middlewares
├── models
├── routes
├── scripts
├── services
├── types
├── utils
│
├── app.ts
└── server.ts
```

## Conceptos que se aprenderán (resumen)
- Fundamentos de MVC y principios de Clean Architecture aplicados a backend.
- Separación de responsabilidades por capas y organización modular.
- Diseño de rutas, controladores, servicios y modelos con TypeScript.
- Autenticación y autorización con JWT.
- Validación de datos y protección ante abuso de peticiones.
- Manejo global de errores y paginación de consultas.
