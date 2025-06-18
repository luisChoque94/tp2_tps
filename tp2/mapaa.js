import fs from "fs/promises"; // usar fs/promises para poder usar Promesas
import path from "path";

async function procesarArchivo() {
  const ruta = "./";
  const rutaArchivo = path.join(ruta, "package.json");
  const rutaSalida = path.join(ruta, "info.txt");

  try {
    const contenidoStr = await fs.readFile(rutaArchivo, "utf8");
    const stats = await fs.stat(rutaArchivo);
    const contenidoObj = JSON.parse(contenidoStr);

    let info = {
      contenidoStr,
      contenidoObj,
      size: stats.size,
    };

    console.log(info);

    await fs.writeFile(rutaSalida, JSON.stringify(info, null, "\t"));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

procesarArchivo();
