const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

function contarVogais(texto) {
  const vogais = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < texto.length; i++) {
    if (vogais.indexOf(texto[i]) !== -1) {
      count++;
    }
  }
  return count;
}

// app.get('/', (req, res) => {
//   res.render('index', {nomes: pessoas});
// })

app.get("/", (req, res) => {
  res.render("index", { vogais: undefined });
});

app.post("/", function(req, res) {
  const texto = req.body.texto;
  var vogais = contarVogais(texto);
  res.render("index", { vogais: vogais });
});

app.listen(port,() => {
  console.log(`Servidor rodando na porta ${port}`);
});