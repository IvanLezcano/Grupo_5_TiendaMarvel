const {check} = require('express-validator');

let validarModificar = [
    check('nombre')
    .notEmpty().withMessage('El campo no puede estar vacío'),
 
]

module.exports = validarModificar;