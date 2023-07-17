
const analyzer = {  

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    function wordCount() {  
      const totaltext = document.querySelector('textarea[name="user-input"]').value;
      let count1 = 0;
      const splittext = totaltext.split(' ');
      for (let i = 0; i < splittext.length; i++) {
        if (splittext[i] !== "") {
          count1++;
        }
      }
      document.querySelector(".word-count").innerHTML = "Palabras: " + count1;
      document.querySelector(".character-count").innerHTML = "Caracteres: " + totaltext.length;
      document.querySelector(".character-no-spaces-count").innerHTML = "Caracteres sin espacios: " + totaltext.trim().length;
    }
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
