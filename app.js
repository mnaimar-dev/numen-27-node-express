const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/objeto", (req, res) => {
  res.json({
    nombre: "Juan",
    apellido: "Pérez",
    Edad: 22,
  });
});

// Valores Dinámicos ---> los dos puntos (:) indican que sigue un valor dinámico. :curso es un parámetro dinámico
app.get("/cursada/:curso/alumno/:nombre", (req, res) => {
  //
  res.json(req.params);
});

// req.query ---> se desarrollan poniendo un ? seguido de una clave y un valor ( /curso?alumno=juan )
// se pueden concatenar usando & ---> ( /curso?alumno=juan&alumno2=claudia&alumno3=nicolas )
app.get("/curso", (req, res) => {
  res.json(req.query);
});

app.get("/alumno/:nombre", (req, res) => {
  //
  res.send(`Yo soy ${req.params.nombre} y hago el curso ${req.query.curso}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/* 
## Permiten Recibir Información desde el Navegador Hacia el Servidor
    - req.params
    - rew.query
    - req.body 
*/
