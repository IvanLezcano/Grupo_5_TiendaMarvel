const {check} = require('express-validator');

let validarModificar = [
    check('nombre')
    .notEmpty().withMessage('El campo no puede estar vacío'),
    check('imagen')
    .custom((value,{req})=>{
        let file = req.file;
        if (!file) {
            throw new Error('Debe subir una imagen');
        }
        return true;
    }),
    check('precio')
    .notEmpty().withMessage('El campo no puede estar vacío'),
    check('descripcion')
    .notEmpty().withMessage('El campo no puede estar vacío'),
    check('categoria')
    .notEmpty().withMessage('El campo no puede estar vacío'),
 
]

module.exports = validarModificar;