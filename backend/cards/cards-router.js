const express = require('express');
const cardRouter = express.Router();

cardRouter
.get('/', (req, res) => {
    res
    .status(200)
    .json('success')
})

module.exports = cardRouter;