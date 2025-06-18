/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
const transformarStringEnArrayDeNumeros = (str, separador) => {
  /* let numeros = str.split(",").map(Number)
    return numeros */
  return str
    .split(separador) // usar el separador que te pasen
    .map((s) => s.trim()) // sacar espacios
    .filter((s) => s !== "" && !isNaN(s)) // filtrar vacíos y no numéricos
    .map(Number); // convertir a número
};

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr
 * @param {string} separador
 * @returns {string} el nuevo string
 */
const transformarArrayDeNumerosAUnSoloString = (arr, separador) => {
  return arr.map(String).join(separador);
};

// exportar ambas funciones
export default {
  transformarStringEnArrayDeNumeros,
  transformarArrayDeNumerosAUnSoloString,
};
