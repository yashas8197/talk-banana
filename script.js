const buttonTranslate = document.querySelector("#btn_translate");
const textInput = document.querySelector("#txt_input");
const outputDiv = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  alert("Something went wrong");
}

function clickHandler() {
  // outputDiv.innerText = "fnsdnsbs" + textInput.value;

  let Inputtext = textInput.value;
  fetch(getTranslationURL(Inputtext))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

buttonTranslate.addEventListener("click", clickHandler);
