require('dotenv/config');
const PORT = 3000;
const HOST = 'localhost';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const ownerRoute = require('./routes/owner');
const userDataRoute = require('./routes/userData');
const loginRoute = require('./routes/login');
const signUpRoute = require('./routes/signUp');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/owner', ownerRoute);
app.use('/userData', userDataRoute);
app.use('/login', loginRoute);
app.use('/signup', signUpRoute);

mongoose.connect(
    process.env.DB_CONN,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    () => console.log('Conexión establecida con la base de datos.')
);

app.listen(PORT, HOST, () => console.log(`Servidor escuchando en ${HOST}:${PORT}`)); 