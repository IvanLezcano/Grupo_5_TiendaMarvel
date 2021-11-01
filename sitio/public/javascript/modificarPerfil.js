window.addEventListener('load',()=>{
    console.log("conectado");
    //botones
    let btnModificar = document.querySelector('#modificar')
    let btnEliminar = document.querySelector('#eliminar')
    let btnCambiarAvatar = document.querySelector('#cambiarAvatar')

    //formularios
    let modificarForm = document.querySelector('.formModificar')
    let eliminarForm = document.querySelector('.formEliminar')
    let cambiarAvatarForm = document.querySelector('.formCambiarAvatar')

    //borrar formularios
    let clearForm = ()=>{
        if (eliminarForm.classList.contains('d-flex')) {
            eliminarForm.classList.remove('d-flex')
            eliminarForm.classList.add('d-none')
        }

        if (cambiarAvatarForm.classList.contains('d-flex')) {
            cambiarAvatarForm.classList.remove('d-flex')
            cambiarAvatarForm.classList.add('d-none')
            
        } 

        if (modificarForm.classList.contains('d-flex')) {
            modificarForm.classList.remove('d-flex')
            modificarForm.classList.add('d-none')
            
        } 
    }


    //eventos
    btnModificar.addEventListener('click',()=>{

        clearForm()

        modificarForm.classList.add('d-flex')
        modificarForm.classList.remove('d-none')

    })

    btnEliminar.addEventListener('click',()=>{
        clearForm()

        eliminarForm.classList.add('d-flex')
        eliminarForm.classList.remove('d-none')

    })

    btnCambiarAvatar.addEventListener('click',()=>{
        clearForm()

        cambiarAvatarForm.classList.add('d-flex')
        cambiarAvatarForm.classList.remove('d-none')


    })


})