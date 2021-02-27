const PORT = 3000;
const HOST = 'localhost';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(
    process.env.DB_CONN,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Conexión establecida con la base de datos.')
);

app.listen(PORT, HOST, `Servidor escuchando en ${HOST}:${PORT}`);