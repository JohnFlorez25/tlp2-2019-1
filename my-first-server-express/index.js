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

const app = express();

app.get('/', function(req, res, next){
    res.send({ Hello : "Poli"});
})

const server = app.listen(5600, function(){
    console.log(`Listening http://localhost:${server.address().port}`)
})