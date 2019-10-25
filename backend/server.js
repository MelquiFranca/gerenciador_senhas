const express = require('express');
const app = express();
const cors = require('cors');

const rotas = require('./routes');

app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(3333, () => {
    console.log('Backend Conectado porta 3333');
});
