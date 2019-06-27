/*COMANDOS DE INSTALACION:
npm init -y : configura mi package.json
npm i -S express: instala express y el -S se encarga de grabarlo en el
package.
En package.json configurar en las dependencias 
    "start": "node index",
    "dev": "nodemon index"
finalmente instalar nodemon
    npm i -D nodemon
y correr el servidor
    npm run dev
*/

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

//configuracion para poder recibir el body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send({ Hello : "Poli"});
})

app.get('/home', (req, res)=>{
    res.send({message:'Mensaje desde Home'})
})

//Parametros
app.get('/user/:uid',(req,res)=>{
    console.log(req.params);
    const uid = req.params.uid;
    res.send({mesagge: `Id buscado: ${uid}`})
});

app.post('/create/user',(req,res) => {
    console.log(req.body);
    const {name,last_name,age,is_active} = req.body;
    res.status(201).send({
        id:'19',
        name,
        last_name,
        age,
        is_active
    });
});

const server = app.listen(5600, 
    function(){
    console.log(`Listening 
    http://localhost:
    ${server.address().port}`)
})