const express = require('express');
const cardRouter = express.Router();

cardRouter
.get('/', (req, res) => {
    res
    .status(200)
    .send('success')
})

module.exports = cardRouter;