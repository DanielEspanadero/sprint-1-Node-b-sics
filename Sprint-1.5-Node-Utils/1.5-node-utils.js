const fs = require('fs');
const { createGzip } = require('zlib');

//* El método createReadStream() del objeto fs nos devuelve un stream a cambio de la ruta del archivo que pretendemos leer.
//* La función fs.createWriteStream()crea un flujo de escritura de una manera muy simple. Después de una llamada a fs.createWriteStream()con la ruta de archivo, tiene una secuencia de escritura con la que trabajar. Resulta que los objetos de respuesta (así como la solicitud) son flujos. Entonces, transmitiremos los POSTdatos al archivo output. Dado que el código es bastante simple, es bastante fácil leerlo y comentar por qué es necesaria cada línea.

const {
  createReadStream,
  createWriteStream
} = require('fs')

//* Documentation of stream: https://nodejs.org/api/stream.html
// 
const { pipeline } = require('stream')

//* Documentation of child process: https://nodejs.org/api/child_process.html
//* child_process.exec(): genera un shell y ejecuta un comando dentro de ese shell, pasando el stdouty stderra una función de devolución de llamada cuando se completa.

const { exec } = require('child_process')

// * Los buffer son conjuntos de datos en crudo, datos binarios, que podemos tratar en NodeJS para realizar diversos tipos de acciones. Los implementa Node a través de una clase específica llamada Buffer, que era necesaria porque Javascript tradicionalmente no era capaz de trabajar con tipos de datos binarios.
// * Comprender los buffer: https://desarrolloweb.com/articulos/buffer-en-nodejs.html

const { Buffer } = require('buffer')

// N1 E1 Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

let recursiva = () => {
  let i = 0
  setInterval(() => {
    console.log(`This is the message number ${i++}`);
  }, 1000)
}

recursiva()


// N1 E2 Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const writeText = () => {
  fs.writeFile('test.txt', 'This is a test', (err) => {
    if (err) {
      throw err
    }
    console.log('Test created')
  })
}

writeText()

// N1 E3 Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

fs.readFile('test.txt', 'utf8', function (err, data) {
  if (err) {
    throw err
  }
  console.log(data);
});

// N2 E1 Crea una funció que comprimeixi el fitxer del nivell 1.

const zipDocument = () => {
  const gzip = createGzip()
  const source = createReadStream('test.txt')
  const destination = createWriteStream('test.txt.gz')

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err)
      process.exitCode = 1
    }
  })
}
zipDocument()

//N2 E2 Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.

// *Comprension de los procesos y los subprocesos en node: https://programmerclick.com/article/94511271550/
// * Interpretación del módulo child_process de Node.js: https://programmerclick.com/article/57971043474/

const subproceso = () => {
  exec('dir', (error, stdout, stderr) => {
    if (error) {
      console.log('Error: ', error)
      return
    }
    if (stderr) {
      console.log('Standar Error: ', stderr)
      return
    }

    console.log(stdout)

  })
}

subproceso()


// N3 E1: 
// E1.1: Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

const txtToHex = (info) => {
  const buf = Buffer.from(info, 'utf8')
  return buf.toString('hex')
}
const txtToBase64 = (info) => {
  const buf = Buffer.from(info, 'utf8')
  return buf.toString('base64')
}

const HexAndBase64 = () => {
  fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      throw err
    }

    const hexDecodedContent = txtToHex(data)

    fs.writeFile('testHex.txt', hexDecodedContent, (err) => {
      if (err) {
        throw err
      }

      console.log('File with hexadecimal created')
    })

    const base64DecodedContent = txtToBase64(data)

    fs.writeFile('testBase64.txt', base64DecodedContent, (err) => {
      if (err) {
        throw err
      }

      console.log('File with base64 created')
    })

  })

}

// HexAndBase64()


// E1.2: Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials.

//* Advanced Encryption Standard (AES) es uno de los algoritmos de cifrado más utilizados y seguros actualmente disponibles. Es de acceso público, y es el cifrado que la NSA utiliza para asegurar documentos con la clasificación "top secret". Su historia de éxito se inició en 1997, cuando el NIST (Instituto Nacional de Estándares y Tecnología) comenzó oficialmente a buscar un sucesor al envejecimiento cifrado estándar DES. Un algoritmo llamado "Rijndael", desarrollado por los criptografistas belgas Daemen y Rijmen, sobresalía tanto en seguridad como en rendimiento y flexibilidad.




// E1.3: Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.



// E1.4: Inclou un README amb instruccions per a l'execució de cada part.
