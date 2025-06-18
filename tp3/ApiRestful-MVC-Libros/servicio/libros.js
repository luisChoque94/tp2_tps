import model from '../model/librosMem.js'


const obtenerLibros = id => {
    if(id) {
        const libro = model.obtenerLibro(id)
        return libro
    }
    else {
        const libros = model.obtenerLibros()
        return libros
    }
}

const guardarLibro = libro => {
    const libroGuardado = model.guardarLibro(libro)
    return libroGuardado
}

const actualizarLibro = (id,libro) => {
    const libroActualizado = model.actualizarLibro(id,libro)
    return libroActualizado
}

const borrarLibro = id => {
    const libroEliminado = model.borrarLibro(id)
    return libroEliminado
}


export default {
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}