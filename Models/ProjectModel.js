'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let projectSchema = Schema({
    nombre: String,
    apellido: String,
    ciudad: String,
    edad: Number,
    fruta: String
});

module.exports = mongoose.model('curso',projectSchema);