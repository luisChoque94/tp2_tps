import fs from "fs"
import path from "path"

try {
  let rutaArchivo = path.join("./", "package.json")
  let contenidoStr = fs.readFileSync(rutaArchivo, "utf8")
  let contenidoObj = JSON.parse(contenidoStr)
  let size = fs.statSync(rutaArchivo).size

  let info = {
    contenidoStr,
    contenidoObj,
    size,
  }
  
  console.log(info);

  //fs.writeFileSync(path.join(("./", 'info.txt'), JSON.stringify(info, null, '\t')))
  const ruta = path.join("./", "info.txt")
  fs.writeFileSync(ruta, JSON.stringify(info, null, "\t"))
} catch (error) {
  console.error("Error al procesar el archivo:", error.message)
}
