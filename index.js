const express = require('express')
const app = express()
const port = 8080
const { dbConnection} = require ('./config/config')
const routes = require('./routes/tasks')

app.use (express.json())

app.use("/",routes)

dbConnection();


app.listen(port,()=>
    console.log('el servidor está escuchando en el puerto http://localhost/8080')
)