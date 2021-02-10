const express = require('express')
const cors = require('cors')    //npm i cors

const app = express()

app.use(cors())

app.use(express.static('public/cliente/dist')) //root del servidor

app.get('/datos', (req,res) => {
    res.send('Ok node.js get datos!')
})

app.get('*', (req,res) => {
    res.redirect('/')
})

const PORT = 8090
app.listen(PORT, err => {
    if(err) throw new Error(`Error en servidor: ${err}`)
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
