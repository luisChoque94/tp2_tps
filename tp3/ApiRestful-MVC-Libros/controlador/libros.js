import servicio from '../servicio/libros.js'


const obtenerLibros = (req,res) => {
    const { id } = req.params
    const libros = servicio.obtenerLibros(id)
    //console.log(id)
    res.json(libros)
}

const guardarLibro = (req,res) => {
    const libro = req.body
    const libroGuardado = servicio.guardarLibro(libro)
    res.json(libroGuardado)
}

const actualizarLibro = (req,res) => {
    const { id } = req.params
    const libro = req.body
    const libroActualizado = servicio.actualizarLibro(id, libro)
    res.status(libroActualizado? 200:404).json(libroActualizado? libroActualizado : {})
}

const borrarLibro = (req,res) => {
    const { id } = req.params
    const libroEliminado = servicio.borrarLibro(id)
    res.status(libroEliminado? 200:404).json(libroEliminado? libroEliminado : {})
}


export default {
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}