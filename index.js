const express = require('express')
const app = express()
const port = 3000
const { dbConnection} = require ('./config/config')
const routes = require('./routes/tasks')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

app.use (express.json())

app.use("/",routes)
app.use("/api-docs", swaggerUI.serve,swaggerUI.setup(docs))

dbConnection();


app.listen(port,()=>
    console.log('el servidor está escuchando en el puerto http://localhost:3000')
)