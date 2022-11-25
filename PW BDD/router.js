const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

router.get('/', (req, res)=>{
    //muestra todos los usuarios
     conexion.query('SELECT * from users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results}); //resultados se envían como variable
            
        } 
    });
})

//REGISTRAR
router.get('/create', (req, res)=>{
    res.render('create');
})


//EDITAR
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            //user para trabajar con user.parametro
            res.render('edit', {user:results[0]}); 
        } 
    });

})

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

//DELETE
router.get('/delete/:id', (req, res)=>{
    const id =req.params.id;
    conexion.query('DELETE FROM users WHERE id =?', [id], (error, results)=>{
        if(error){
            throw error;
        }
        else{
            res.redirect('/');
        }
    })
})

router.get('/login', (req, res)=>{
    res.render('login');
})

router.get('/home', (req, res)=>{
    res.render('home');
})
module.exports = router;