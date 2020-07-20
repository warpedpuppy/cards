const express = require('express');
const app = express();
const cardsRouter = require('../cards/cards-router');
const helmet = require('helmet');
const cors = require('cors');


app.use(
    cors({
        origin: [ 'http://localhost:3000']
    })
);

app.use(helmet());
app.use('/api/cards', cardsRouter);

module.exports = app;