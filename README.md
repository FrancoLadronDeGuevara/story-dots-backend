<h1 align="center" id="title">Coding Challenge - Story Dots Backend</h1>

<p align="center"><img src="https://socialify.git.ci/FrancoLadronDeGuevara/story-dots-backend/image?description=1&amp;descriptionEditable=&amp;font=Inter&amp;name=1&amp;owner=1&amp;theme=Light" alt="project-image"></p>

<p id="description">Este repositorio contiene el código del backend de la aplicación. El backend está construido con Node.js y Express y utiliza MongoDB como base de datos. A continuación se detallan las funcionalidades principales las librerías utilizadas y cómo puedes ejecutar el proyecto localmente.</p>

# 🚀 Demo

[http://localhost:4000/](http://localhost:4000/)
  
# 🧐 Funcionalidades

*   Autenticación de usuarios: Registros inicios de sesión y protección de rutas mediante JWT (JSON Web Tokens).
*   Manejo de productos: CRUD (Crear Leer Actualizar Eliminar) de productos.
*   Validaciones: Validaciones robustas de datos de entrada mediante express-validator.
*   Protección de rutas: Uso de middlewares para garantizar que solo usuarios autenticados puedan acceder a ciertos endpoints.
*   Gestión de cookies: Uso de cookie-parser para manejar cookies en el lado del servidor.

# ⚡Endpoints

## Usuarios
* GET /api/users/get
Obtener información del usuario autenticado.


* POST /api/users/login
Iniciar sesión.


* GET /api/users/logout
Cerrar sesión.

## Productos

* GET /api/products/
Obtener todos los productos disponibles.

* GET /api/products/get/
Obtener los detalles de un producto por su ID.

* POST /api/products/create
Crear un nuevo producto.

* PUT /api/products/update/
Actualizar un producto existente por su ID.

* DELETE /api/products/delete/
Eliminar un producto por su ID.

## Marcas

* GET /api/brands/
Obtener todas las marcas disponibles.

* POST /api/brands/create
Crear una nueva marca.

* PUT /api/brands/update/
Actualizar una marca por su ID.

* DELETE /api/brands/delete/
Eliminar una marca por su ID.


# 🛠️ Cómo ejecutar el proyecto en local:

<p>1. Clonar el repositorio:</p>

```
https://github.com/FrancoLadronDeGuevara/story-dots-backend.git
```

<p>2. Instalar las dependencias:</p>

```
npm install
```

<p>3. Crear un archivo .env en la raíz del proyecto y añadir las siguientes variables de entorno:</p>

```
PORT=4000 
MONGO_DB_URI=string_de_conexion_a_tu_base_de_datos
SECRET_KEY=tu_secret_key
TOKEN_EXPIRES_IN=7d
```

<p>4. Ejecutar el servidor en modo desarrollo:</p>

```
npm run dev
```

<p>5. El backend estará corriendo en http://localhost:4000/.</p>
  
# 💻 Librerías utilizadas

El backend utiliza las siguientes dependencias:

*   bcrypt: Para el hash y comparación de contraseñas.
*   cookie-parser: Para el manejo de cookies en las peticiones.
*   cors: Para permitir el acceso a la API desde dominios externos.
*   dotenv: Para manejar variables de entorno.
*   express: Framework de servidor para manejar las rutas y peticiones.
*   express-validator: Para validar y sanitizar los datos de entrada de los usuarios.
*   jsonwebtoken: Para la autenticación basada en tokens.
*   mongoose: ODM para MongoDB utilizado para la interacción con la base de datos.