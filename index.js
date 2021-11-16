const express = require('express');

const app = express();
const port = 3000;

//direcionando os diretórios com os arquivos(estáticos) js, css, html
//
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/scripts'));

//Route página inicial(Login)
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');  
});

//Route página Home
app.get('/home', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html');
});

//Route página para login
app.get('/login', (req, res) => {
    console.log(req.method);
    res.sendFile(__dirname + '/views/home.html');
});

//Route página para criar conta
app.get('/createaccount', (req, res) =>{
    console.log(req.method);
    res.sendFile(__dirname + '/views/createaccount.html');
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));