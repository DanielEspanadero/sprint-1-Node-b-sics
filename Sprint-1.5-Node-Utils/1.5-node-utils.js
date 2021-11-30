// N1 E1 Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

let recursiva = () => {
  let i = 0
  setInterval(() => {
    console.log(`Este es el mensaje número ${i++}`);
  }, 1000)
}

recursiva()


// N1 E2 Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

const base = 5;
let salida = '';
const nomArxiu = `Tabla.${base}.txt`

let escribirFichero = () => {
  for (let i = 1; i <= 10; i++) {
    salida += (`${base} x ${i} = ${base * i}\n`);
  };

  fs.writeFile(nomArxiu, salida, (err) => {
    if (err) throw err;
    console.log(`Tabla-${base} creada`);
  });


};

escribirFichero()


// N1 E3 Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

fs.readFile(nomArxiu, 'utf8', function (err, data) {
  console.log(data);
});


// N2 E1 Crea una funció que comprimeixi el fitxer del nivell 1.

const zipDocument = () => {
  const gzip = createGzip()
  const source = createReadStream(`Tabla.${base}.txt`)
  const destination = createWriteStream(`Tabla.${base}.txt.gz`)

  pipeline(source, gzip, destination, (e) => {
    if (e) {
      console.error('An error occurred:', e)
      process.exitCode = 1
    }
  })
}
zipDocument()

//N2 E2 Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.


// N3 E1: 
// E1.1: Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.


// E1.2: Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials.
// E1.3: Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
// E1.4: Inclou un README amb instruccions per a l'execució de cada part.

