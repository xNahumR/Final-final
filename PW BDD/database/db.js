const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

connection.connect((error)=>{
    if(error){
        console.error('Error de conexion' + error);
        return;
    }
    console.log('Se ha conectado ');
})

module.exports = connection; 