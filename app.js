require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongo = require('./schemas')()

app.listen(process.env.PORT, () => {
	console.log('http://127.0.0.1:'+process.env.PORT);
})

const boardRouter = require('./routes/board')
app.use('/board', boardRouter)

app.use((error, req, res, next) => {
	console.log(err)
})