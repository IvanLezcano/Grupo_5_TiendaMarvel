const {check} = require('express-validator');
const path = require('path');

let validarModificar = [
    check('nombre')
    .notEmpty().withMessage('El campo no puede estar vacío'),
    check('imagen')
    .custom((value,{req})=>{
        let file = req.file;
        let extensiones = [".jpg", ".png", ".img",".webp"];
        if (!file) {
            throw new Error('Debe subir una imagen');
        }else {
            let fileExtension = path.extname(file.originalname);
            if (!extensiones.includes(fileExtension)) {
              throw new Error(`Las extensiones de archivo permitidas son
                      ${extensiones.join(", ")}`);
            }
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