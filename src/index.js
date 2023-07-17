
import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.getElementById("reset-button").addEventListener("click", reload)

function reload() {
  document.location.reload()
}

document.querySelector('textarea[name="user-input"]').addEventListener("keyup", wordCount)

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
