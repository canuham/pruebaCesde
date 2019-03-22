'use strict'

let express = require('express');

var app = express();

let projectRoutes = require('./Routes/ProjectRoutes');

app.use(express.json());

app.use('/api',projectRoutes);

// app.get('/api/test' ,(req,res)=>{
//     res.status(200).send({
//         mensaje: "Hola mundo desde mi API de nodejs",
//         bienvenida: "Felicidades"
//     });
// });

// app.get('/api/registro' ,(req,res)=>{
//     res.status(200).send({
//         mensaje: "registro exitoso"
//     });
// });

module.exports = app;
