import fs from 'fs';

console.log("probando");

const data = fs.readFileSync('/Users/florgardu/archivos/prueba.txt', 'utf-8')
console.log(data);


 //fs.writeFileSync('/Users/florgardu/archivos/prueba.txt', 'BORRE TODO JAJA')
 //const data2 =fs.readFileSync('/Users/florgardu/archivos/prueba.txt', 'utf-8')
//console.log(data2);

//fs.writeFileSync('/Users/florgardu/archivos/prueba2.txt', 'BORRE TODO JAJA')

//fs.appendFileSync('/Users/florgardu/archivos/prueba.txt', 'Ahora agrego algo')


//fs.renameSync('/Users/florgardu/archivos/prueba2.txt', '/Users/florgardu/archivos/archivoNuevo.txt')

//fs.unlinkSync('/Users/florgardu/archivos/prueba1.txt')


try {
    const data = fs.readFileSync('/Users/florgardu/noexiste/no')
    console.log(data)
    } catch (error) {
    // manejar el error!!
    console.log(error)
    }
//fs.mkdirSync('/Users/florgardu/archivos/carpetaNueva')


// leer el contenido de un directorio (Carpeta)

//const listaDeNombresDeArchivos = fs.readdirSync('/Users/florgardu/archivos')
//console.log(listaDeNombresDeArchivos)