import fs from 'fs' 
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
const leerArchivoComoString = (ruta) => {
    let datos = fs.readFileSync(ruta , 'utf-8').toString()
    return datos
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
const escribirTextoEnArchivo = (ruta, texto, shouldCreateIfNotExists) => {
    if(fs.existsSync(ruta)){
        fs.writeFileSync(ruta, texto)
    }else{
        if(shouldCreateIfNotExists == 'true'){
            fs.writeFileSync(ruta, texto, 'utf-8')
        }else{
            throw new Error("el archivo no existe");
        }
    }
}

// exportar ambas funciones
export default {
    leerArchivoComoString,
    escribirTextoEnArchivo
}