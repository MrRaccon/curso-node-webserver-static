const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config(); 

const port =process.env.PORT;
//handeblars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//HBS RENDERIZA LAS VISTAS DESDE EL LADO DEL BACKEND

//SERVIR CONTENIDO ESTATICO
app.use(express.static('public'));
 //POR ESO LA RUTA PADRE / NO SE EJECUTA,INMEDIATAMENTE SE OBSERVA  EL CONTNEIDO DEL HTML

//  app.get('/',  (req, res)=> {
//     res.render('home',{
//         nombre:'Alexis Biñuelo',
//         titulo:'Curso de Node'
//     })
//   })

// app.get('/generic',  (req, res)=> {
//     res.render('generic',{
//         nombre:'Alexis Biñuelo',
//         titulo:'Curso de Node'
//     })
//   })


//   app.get('/elements',  (req, res)=> {
//     res.render('elements',{
//         nombre:'Alexis Biñuelo',
//         titulo:'Curso de Node'
//     })
//   })

  app.get('*', (req, res)=> {
    res.sendFile(__dirname+'/public/index.html')
  })
 
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })