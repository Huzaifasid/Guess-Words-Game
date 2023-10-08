const msgBox = document.querySelector(".msgBox");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let sWords = [
  "chicken",
  "cat",
  "ant",
  "html",
  "javascript",
  "php",
  "c++",
  "reactjs",
  "css",
  "python",
  "amazon",
];
let newWords = "";
let randWords = "";

const createSwords = () => {
  let randomNum = Math.floor(Math.random() * sWords.length);

  let newSwords = sWords[randomNum];

  return newSwords;
};

const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    input.classList.toggle("hidden");
    newWords = createSwords();
    randWords = scrambleWords(newWords.split("")).join("");

    msgBox.innerHTML = `Guess the words: ${randWords}`;
  } else {
    let temWord = input.value.toLowerCase();
    if (temWord === newWords) {
      play = false;
      msgBox.innerHTML = `Awesome It's correct. It is ${newWords}`;
      btn.innerHTML = "Start Again";
      input.classList.toggle("hidden");
      input.value = "";
    } else {
      msgBox.innerHTML = `Sorry It's not correct. Plz try again ${randWords}`;
    }
  }
});
