'use strict'

let mongoose = require('mongoose');
let app = require("./app");
let port = 3700;
//Promesa para conexion con mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cosita", { useNewUrlParser: true })
    .then(() => {
        console.log("Conexion realizada exitosamente");
        app.listen(port, () => {
            console.log("Corriendo servidor");
        })
    })
    .catch((err) => {
        console.log(err);
    });