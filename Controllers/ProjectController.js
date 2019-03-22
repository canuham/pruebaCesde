'use strict'
let Project = require("../Models/ProjectModel");
// Se crea un objeto controller tipo json

let controller = {
    home: (req,res)=>{
        res.status(200).send({
            message: 'soy la home'
        });
    },
    test: (req,res)=>{
        res.status(200).send({
            message: 'Soy el metodo test del controlador'
        });
    },
    inicio: (req,res)=>{
        res.status(200).send({
            message: 'Soy el metodo inicio del controlador'
        });
    },
    saveProject: (req,res) =>{
        let project = new Project();
        let params = req.body;
        project.nombre = params.nombre;
        project.apellido = params.apellido;
        project.ciudad = params.ciudad;
        project.edad = params.edad;
        project.fruta = params.fruta;
        project.save((err,projectStored)=>{
            if(err){
                return res.status(500).send({
                    mensaje: "No se ha podido guardar el documento"
                });
            }
            if(!projectStored){
                return res.status(404).send({
                    mensaje: "No se ha podido guardar el proyecto"
                });
            }
        });
        res.status(200).send({
            project: projectStored,
            mensaje: "todo bien"
        });
    }
};

module.exports = controller;