const express = require("express");
const app = express();
const path = require("path");
const tableToDo = require('./routes/table');
const indexToDO = require('./routes/index');

app.use("/", indexToDO);
app.use("/insert", tableToDo);

// Configurar o diretório de visualizações
app.set('views', path.join(__dirname, 'views'));

// Configurar o mecanismo de visualização
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Rodando');
});