
import analyzer from './analyzer.js';

//Variables sobre los querySelectors de los hijos de la lista
const wordCount = document.querySelector('li[data-testid="word-count"]');
const characterCount = document.querySelector('li[data-testid="character-count"]');
const characterCountNoSpaces = document.querySelector('li[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('li[data-testid="number-count"]');
const numberSum = document.querySelector('li[data-testid="number-sum"]');
const averageWordLength = document.querySelector('li[data-testid="word-length-average"]');

//Variable que llama al contenido del textarea
const textarea = document.querySelector('textarea[name="user-input"]');

//Event listener que conecta el soltar cada tecla con los métodos del analizer. Esto para update el contador, de acuerdo al value del textarea.
textarea.addEventListener("keyup", function (event) { 
  const quantityWords = analyzer.getWordCount(event.target.value); 
  wordCount.innerHTML = "Palabras: " + quantityWords;
  const quantityCharacters = analyzer.getCharacterCount(event.target.value);
  characterCount.innerHTML = "Caracteres: " + quantityCharacters;
  const quantityCharactersNoSpaces = analyzer.getCharacterCountExcludingSpaces(event.target.value);
  characterCountNoSpaces.innerHTML = "Caracteres sin espacios: " + quantityCharactersNoSpaces
  const quantityNumbers = analyzer.getNumberCount(event.target.value);
  numberCount.innerHTML = "Números: " + quantityNumbers;
  const quantityNumbersSum = analyzer.getNumberSum(event.target.value);
  numberSum.innerHTML = "Suma de números: " + quantityNumbersSum;
  const totalAverageWordLength = analyzer.getAverageWordLength(event.target.value);
  averageWordLength.innerHTML = "Promedio de longitud: " + totalAverageWordLength;
} );

//Botón
//Primero se conecta con DOM el botón con un event listener que reacciona al click y se obtiene la función de reload, que refresca la página.

document.getElementById("reset-button").addEventListener("click", reload)

function reload() {
  document.location.reload()
} 