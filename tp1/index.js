import fileUtils from './src/utils/fileUtils.js'
import apareo from './src/apareo.js'
import transformUtils from './src/utils/transformUtils.js'

// leo los 4 archivos a memoria

// preparo los 4 arrays a partir de los archivo leidos
    let str1 = fileUtils.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
    let str2 = fileUtils.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
    let str3 = fileUtils.leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
    let str4 = fileUtils.leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')

    let str5 = transformUtils.transformarStringEnArrayDeNumeros(str1, ',')
    let str6 = transformUtils.transformarStringEnArrayDeNumeros(str2, ',')
    let str7 = transformUtils.transformarStringEnArrayDeNumeros(str3, ',')
    let str8 = transformUtils.transformarStringEnArrayDeNumeros(str4, ',')

// combino los primeros dos arrays
    let combinado1 = apareo.combinarDosArrays(str5, str6)
    let combinado2 = apareo.combinarDosArrays(str7, str8)
    console.log(combinado1)
    console.log(combinado2)

// combino los cuatro arrays
    //console.log(str5,str6,str7,str8)
    let combino = apareo.combinarNArrays([str5, str6, str7, str8])
    //console.log(combino)
