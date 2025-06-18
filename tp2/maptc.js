import fs from "fs/promises"; // usar fs/promises para poder usar Promesas
import path from "path";

const ruta = "./";
const rutaArchivo = path.join(ruta, 'package.json');
const rutaSalida = path.join(ruta, 'info.txt');



fs.readFile(rutaArchivo, 'utf8')                
  .then(contenidoStr => {
    return fs.stat(rutaArchivo).then(stats => {
      const contenidoObj = JSON.parse(contenidoStr);
      
      let info = {
        contenidoStr,
        contenidoObj,
        size: stats.size
      };

      console.log(info);

      return fs.writeFile(rutaSalida, JSON.stringify(info, null, '\t'));
    });
  })
  .catch(error => {
    console.error('error:', error.message);
  });
