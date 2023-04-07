// Importar Express
const express = require("express");
const bodyparse = require("body-parser");
// Crear una instancia de la aplicación
const app = express();

app.use(bodyparse.urlencoded({ extended: true }));
app.use(bodyparse.json());
// Definir una ruta con la función controladora
app.get("/", function (req, res) {
  res.send("Hola mundo!");
});
const PORT = process.env.PORT || 3001;
// Levantar el servidor
app.listen(PORT, function () {
  console.log("Servidor levantado en el puerto 3001");
});
