
const analyzer = {  

  getWordCount: (text) => {
    let count = 0; // Inicio de contador
    const splittext = text.split(' '); //Texto dividido en strings dentro de un array
    //console.log (splittext);
    for (let i = 0; i < splittext.length; i++) {
      if (splittext[i] !== "") {
        count++;
      }
    } //Bucle que recorre todo el array. Cada vez que pasa el bucle checa si los elementos del array no son iguales a "nada", entonces se suma uno al contador.
    return count; //Se retorna el valor final del contador
  },

  getCharacterCount: (text) => { 
    return text.length;// Retorna la suma de caracteres dentro del texto.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const regex = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_'{|}~\s]/g, "");//Se crea una variable que contiene la totalidad del texto, siendo reemplazado por una expresión regular. La expresión regular tiene como finalidad buscar todos los signos de puntuación y espacios y luego reemplazarlo por una cadena vacía (""). cadena.replace(expresionRegular, reemplazo)
    
    return regex.length; //Retorna la suma de caracteres dentro del array reemplazado.
  },
  getAverageWordLength: (text) => {    
    let count = 0; //Inicio de contador
    const splittext = text.split(' ').length; //Suma de caracteres dentro del texto dividido en strings dentro de un array.
    const textArray = text.split(' '); //Texto dividido en strings dentro de un array.
    for (let i = 0; i < splittext; i++) { 
      count += textArray[i].length; 
    } //En el bucle se recorren todas las palabras del texto. En cada iteración, se cuenta la longitud de las palabras, guardado en la variable count.
    const wordAverage = count / splittext;//Para tener el promedio de longitud, se divide la longitud total de todas las palabras sobre la cantidad de todas palabras.
    const fixedAverage = wordAverage.toFixed(2); //Con la función toFixed se deja el promedio en dos caracteres.
    return parseFloat(fixedAverage); // Se transforma el promedio en número decimal con parseFLoat
  },
  getNumberCount: (text) => {
    let count = 0; // Inicio del contador.
    const textSplit = text.split(' ');//Texto dividido en strings dentro de un array.
    for ( let i = 0; i < textSplit.length; i++) {
      if (Number(textSplit[i])) {
        count = count + 1
      }
    }// El bucle recorre todas las palabras del texto. En cada iteración, se checa si cada string del texto es un número con la función Number() y en el caso que lo sea se suma uno al contador.
    return count; //Se returna el contador total

  },
  getNumberSum: (text) => {
    let count = 0; // Inicio del contador.
    const textSplit = text.trim().split(' '); //Se divide en texto en strings en una array, sin tomar en cuenta los espacios en blanco.
    for ( let i = 0; i < textSplit.length; i++) {
      if (!isNaN(textSplit[i]) && textSplit[i] !== "") {
        count = count + (textSplit[i]*1);
      }
    }// Se crea un blucle que recorre todas las palabras del texto. En cada iteración, se checa que cada elemento del array: 1. Que no sea un número y 2. Que no sea un espacio en vacío. Si se cumple se cuenta cada elemento entre sí, multiplicando cada elemento por 1 y sumándolo al contador.
    return count //Retorna el total del contador final.
  }
};


export default analyzer;
