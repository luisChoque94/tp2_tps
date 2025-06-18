import fs from "fs";
import path from "path";

const ruta = "./"
const rutaArchivo = path.join(ruta, "package.json");

//read/write File asincronico con callbacks anidados

fs.readFile(rutaArchivo, "utf8", (error, contenidoStr) => {
  if (error) return console.error("error al leer el archivo:", error.message);

  fs.stat(rutaArchivo, (error, stats) => {
    if (error)
      return console.error(
        "error al obtener estadísticas del archivo:",
        error.message
      );

    let contenidoObj;
    try {
      contenidoObj = JSON.parse(contenidoStr);
    } catch (parseerror) {
      return console.error(
        "error al parsear el contenido JSON:",
        parseerror.message
      );
    }

    const info = {
      contenidoStr,
      contenidoObj,
      size: stats.size,
    };

    console.log(info);

    fs.writeFile(path.join(ruta, "info.txt"), JSON.stringify(info, null, "\t"), (error) => {
        if (error)
          return console.error("error al escribir el archivo:", error.message);
      }
    );
  });
});
