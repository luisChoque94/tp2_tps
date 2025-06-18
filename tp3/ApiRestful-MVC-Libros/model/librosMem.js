/* const libros = [
    { id: '1',  nombre: 'TV',   precio: 1234.56,    stock: 55 },
    { id: '2',  nombre: 'Mesa', precio: 2345.67,    stock: 77 },
    { id: '3',  nombre: 'Mouse',precio: 3456.78,    stock: 99 },
] */

const libros = [
    { id: '1', titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
    { id: '2', titulo: '1984', autor: 'George Orwell', año: 1949 },
    { id: '3', titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', año: 1943 },
    { id: '4', titulo: 'Rayuela', autor: 'Julio Cortázar', año: 1963 },
    { id: '5', titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', año: 1605 }
]


const obtenerLibros = () => libros

const obtenerLibro = id => {
    const libro = libros.find(p => p.id === id)
    return libro || {}
}

const guardarLibro = libro => {
    libro.id = String(parseInt(libros[libros.length-1]?.id || 0) + 1)   // ?. -> optional chaining
    libros.push(libro)
    return libro
}

const actualizarLibro = (id,libro) => {
    const index = libros.findIndex(p => p.id === id)
    if(index != -1) {
        const libroAnt = libros[index]
        const libroAct = { ...libroAnt, ...libro }
        libros.splice(index, 1, libroAct)
        return libroAct
    }
    else {
        return null
    }
}

const borrarLibro = id => {
    const index = libros.findIndex(p => p.id === id)
    if(index != -1) {
        const libro = libros.splice(index, 1)[0]
        return libro
    }
    else {
        return null
    }
}

export default {
    obtenerLibros,
    obtenerLibro,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}