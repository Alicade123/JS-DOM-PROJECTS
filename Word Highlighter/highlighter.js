let myParagraph = document.getElementById("myParagraph");
const text = myParagraph.innerHTML;

// const debugging = document.getElementById("debugging");

function getMost5OccuringWords(inputs) {
  inputs = inputs.replace(/[^a-zA-Z ]/g, "").split(" ");
  const unique = [...new Set(inputs)];
  let words_occurance = [];
  for (let i = 0; i < unique.length; i++) {
    if (unique[i] === "") continue;
    let count = 0;
    for (let j = 0; j < inputs.length; j++) {
      if (unique[i] === inputs[j]) count++;
    }
    words_occurance.push([unique[i], count]);
  }
  const fiveWords = words_occurance.sort((a, b) => b[1] - a[1]).slice(0, 5);
  return fiveWords.map((fiveWord) => fiveWord[0]).join(" ");
}
const occuring = getMost5OccuringWords(text);
console.log(occuring);

// Function to highlight most 5 occuring words in text
function highlight(string) {
  myParagraph.innerHTML = "";
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    if (
      occuring
        .split(" ")
        .includes(string[i].toLowerCase().replace(/[^a-zA-Z ]/g, ""))
    ) {
      const span = document.createElement("span");
      const panct = document.createElement("span");
      panct.innerHTML = string[i].replace(/[a-zA-Z ]/g, "") + " ";
      span.innerHTML = string[i].replace(/[^a-zA-Z ]/g, "");
      span.classList.add("highlighted");
      if (/^[A-Z]/.test(span.innerHTML)) {
        span.classList.add("capital");
      }

      myParagraph.append(span, panct);
    } else {
      myParagraph.innerHTML += string[i] + " ";
    }
  }
}
highlight(text);
