const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir el archivo index.html desde el directorio "public"
app.use(express.static('src'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
