
import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//variable que es igual a "llamar" al doc. HTML contador de palabras
const wordCount = document.querySelector(".word-count")
const characterCount = document.querySelector(".character-count")
const characterCountNoSpaces = document.querySelector(".character-no-spaces-count")

const textarea = document.querySelector('textarea[name="user-input"]')//variable que es igual a "llamar" al doc. HTML el área de texto

textarea.addEventListener("keyup", function (event) { 
  const quantityWords = analyzer.getWordCount(event.target.value); 
  wordCount.innerHTML = "Palabras: " + quantityWords;
  const quantityCharacters = analyzer.getCharacterCount(event.target.value);
  characterCount.innerHTML = "Caracteres: " + quantityCharacters;
  const quantityCharactersNoSpaces = analyzer.getCharacterCountExcludingSpaces(event.target.value);
  characterCountNoSpaces.innerHTML = "Caracteres sin espacios: " + quantityCharactersNoSpaces
} )
//conecto la variable anterior del área de texto con un evento que sucede por apretar alguna tecla (keyup) con una función con parámetro evento que sigue las siguientes instrucciones: 1. crea una variable que contiene el número total de palabras, gracias a llamar a el proceso del analizer getWordCount(objeto,método), teniendo como propiedad traer el valor(value) del text.area   2. se llama all contenido de la varible wordCount para cambiarlo por la cantidad de palabras










//Botón//

document.getElementById("reset-button").addEventListener("click", reload)

function reload() {
  document.location.reload()
} 