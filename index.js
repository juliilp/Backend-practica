// Importar Express
const express = require("express");

// Crear una instancia de la aplicación
const app = express();

// Definir una ruta con la función controladora
app.get("/", function (req, res) {
  res.send("Hola mundo!");
});

// Levantar el servidor
app.listen(3003, function () {
  console.log("Servidor levantado en el puerto 3000");
});
