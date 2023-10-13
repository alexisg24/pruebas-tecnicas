//Este codigo lo que quiere dar a explicar es que lee un archivo en formato utf8 y luego de 1seg guarda el contenido que tenia el mismo pero en mayusculas en otro archivo
import fs from 'node:fs'

export function procesarArchivo(callback) {

    const handleWriteFile = (error) => {
        if (error) {
          console.error('Error guardando archivo:', error.message);
          callback(error)
        }
        console.log('Archivo procesado y guardado con éxito');
        callback(null)
    }

    const handleReadFile = (error, content) =>{
        if (error) {
            console.error('Error leyendo archivo:', error.message);
            callback(error)
          }
        const textoProcesado = content.toUpperCase();
        fs.writeFile('output.txt', textoProcesado, handleWriteFile)
    }

  fs.readFile('input.txt', 'utf8', handleReadFile)
}