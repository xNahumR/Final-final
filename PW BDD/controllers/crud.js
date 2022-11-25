
//invocar el modulo de conexion a la base de datos 
const connection = require('../database/db');

exports.save = (req, res)=>{
    const user = req.body.user;
    const name = req.body.name;
    const rol = req.body.rol; 
    const pass = req.body.pass; 

    connection.query('INSERT INTO users SET ?',{user: user, name: name, rol: rol, pass: pass}, async(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/');
        }
    
    })
}

exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const name = req.body.name;
    const rol = req.body.rol; 
    const pass = req.body.pass; 

    connection.query('UPDATE users SET ? WHERE id =?',[{user: user, name: name, rol: rol, pass: pass},id ], async(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/');
        }
    
    })
}

