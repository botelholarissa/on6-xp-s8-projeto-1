const express = require('express')
const app = express()
const router = require('./routes/gamesRoute')


// rotas

app.use("/", router)


module.exports = app 