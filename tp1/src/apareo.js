/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB){
    let combinado = []
    let i = 0
    let j = 0

    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            combinado.push(arrA[i]);
            i++;
        } else if (arrA[i] > arrB[j]) {
            combinado.push(arrB[j]);
            j++;
        } else {
            combinado.push(arrA[i]);
            i++;
            j++;
        }
    }

     while (i < arrA.length) {
        combinado.push(arrA[i]);
        i++;
    }

    while (j < arrB.length) {
        combinado.push(arrB[j]);
        j++;
    }

    return combinado;

}

/* *
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    let resultado = [];

    for (let i = 0; i < arrs.length; i++) {
        resultado = combinarDosArrays(resultado, arrs[i]);
    }

    return resultado;
}

// exportar ambas funciones

export default {
    combinarNArrays,
    combinarDosArrays
}