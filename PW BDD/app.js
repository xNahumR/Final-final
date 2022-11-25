const express = require('express');
const app = express();
const session = require('express-session');
const dotenv = require('dotenv');
const { json } = require('express');
dotenv.config({path: './env/.env'});


app.set('view engine', 'ejs');
//como se capturan los datos
app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));

app.use('/resources', express.static('public'));    //nuestros recursos en directorio publico 
app.use('/resources', express.static(__dirname+'public'));

//invocar bcryptjs
const bcryptjs = require('bcryptjs');

//configurar variables de session 

app.use(session({
    secret: 'secret', 
    resave: true,
    saveUninitialized: true
}));


app.listen(5000, ()=>{
    console.log("SERVER ON http://localhost:5000");
})

