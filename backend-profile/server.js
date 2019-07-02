const express = require('express');
const bodyParser = require('body-parser')

//app
const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//routes
const profileApiRouter = require('./router/api/ProfileApi')

app.get('/', (req,res) =>{
    res.send('Hola Poli Perfiles')
})

//routes
app.use('/api/profiles', profileApiRouter)

const server = app.listen(5700, ()=>{
    console.log(`Listening http://localhost:${server.address().port}`)
})