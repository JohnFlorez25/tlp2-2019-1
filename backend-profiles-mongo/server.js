const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const profileApiRouter = require('./routes/api/ProfileApiService');

// app
const app = express();


//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


// routes
app.use('/api/profiles', profileApiRouter);

// redirect
app.get('/', (req, res) =>{
    res.redirect('/api/profiles')
});



// server
const server = app.listen(5700, ()=>{
    console.log(`Listening http://localhost:${server.address().port}`)
})
