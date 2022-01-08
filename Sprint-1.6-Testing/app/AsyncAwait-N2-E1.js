// N2 E1: Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

// TODO Crear una nova funció asíncrona que cridi a una altra
// TODO Fer que retorni una promise que efectuï la funció resolve als 2 segons

const mostrarAls2Secs = () => {
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Aquest missatge s`ha de mostrar als 2 segons');
        }, 2000);
    });
    return promesa;
};

const cridarFuncio = async () => {
    try {
        const mostrar = await mostrarAls2Secs();
    } catch (err) {
        console.log(err);
    }
};

cridarFuncio();

module.exports = {
    mostrarAls2Secs,
    cridarFuncio
}