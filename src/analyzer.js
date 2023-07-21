
const analyzer = {  

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`
    
    //text = document.querySelector('textarea[name="user-input"]').value;  
    let count = 0;
    const splittext = text.split(' ');
    for (let i = 0; i < splittext.length; i++) {
      if (splittext[i] !== "") {
        count++;
      }
    }
    return count; 
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.  
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const regex = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_'{|}~\s]/g, "");
    
    return regex.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    const splittext = text.split(' ').length;
    const textArray = text.split(' ');
    for (let i = 0; i < splittext; i++) { 
      count += textArray[i].length; 
    }
    const wordAverage = count / splittext;
    const fixedAverage = wordAverage.toFixed(2);
    return parseFloat(fixedAverage)
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let count = 0
    const textSplit = text.split(' ')
    for ( let i = 0; i < textSplit.length; i++) {
      if (Number(textSplit[i])) {
        count = count + 1
      }
    }
    return count

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    const textSplit = text.trim().split(' ');
    for ( let i = 0; i < textSplit.length; i++) {
      const element = textSplit[i]
      if (!isNaN(element) && element !== "") {
        count = count + (element*1);
      }
    }
    return count 
  }
};


export default analyzer;
