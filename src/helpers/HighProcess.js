export const highProcess = (iterations) => {
    for (let index = 0; index < iterations; index++) {
        console.log('Hola mundo');
    }

    return `${ iterations } iteraciones realizadas...`;
};