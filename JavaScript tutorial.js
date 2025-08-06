// const output = document.querySelector("#output");

// //current Element
// const currentElement = document.querySelector(".current");
// output.textContent = currentElement.textContent;

// //next Subling
// let output2 = document.querySelector("#output2");
// const nextSubling = currentElement.nextElementSibling;
// // const nextSubling = current.nextSibling;
// output2.textContent = nextSubling.textContent;

// //Privious Subling
// let outpu3 = document.querySelector("#output3");
// let proviosSubling = currentElement.previousElementSibling;
// output3.textContent = proviosSubling.textContent;

// const ul = document.querySelector("#menu");
// const output4 = document.querySelector("#output4");
// output4.textContent = ul.textContent;

// console.log(currentElement.parentElement);
// console.log(nextSubling.parentNode);

// //apend vs appendChild

// const menu = document.querySelector("#menu");
// const li2 = document.createElement("li");
// li2.innerText = "Alicade and ben are the best friends";

// menu.append(
//   "Invest more money in your own Business",
//   document.createElement("li"),
//   li2
// );

// const li = document.createElement("li");
// li.innerText = "Alicade is the best";

// menu.appendChild(li);

// // children

// const firstChild = menu.firstElementChild;
// const lastChild = menu.lastElementChild;
// const allChild = menu.children;
// console.log(firstChild.innerText);
// console.log(lastChild.innerText);
// console.log(allChild);

// // turn HTML correction into real array
// // const arrayOfChildren = Array.from(allChild);
// const arrayOfChildren = [...allChild];
// console.log(arrayOfChildren);
// const arrayMethodApplication = arrayOfChildren.filter(
//   (elem, index, arr) => index % 2 === 0 && elem
// );
// console.log(arrayMethodApplication);

// //Doccument Fragement
// let languages = ["JS", "TypeScript", "Elm", "Dart", "Scala"];
// let langEl = document.querySelector("#language");
// const fragementx = document.createDocumentFragment();

// languages.forEach((language) => {
//   const li = document.createElement("li");
//   li.innerHTML = language;
//   fragementx.appendChild(li);
// });
// langEl.appendChild(fragementx);

// //replace ()

// const li2beReplaced = document.querySelector("#none");
// const li2Repcace = document.createElement("li");
// li2Repcace.textContent = "African Union and Best of their records";
// menu.replaceChild(li2Repcace, li2beReplaced);

const menu = document.getElementById("menu");
const message = document.getElementById("output");
const removeButton = document.getElementById("remove");
removeButton.addEventListener("click", function () {
  if (menu.firstElementChild) menu.lastElementChild.remove();
  else {
    console.log("no more children");
    message.innerText = "Warning! No more children to be removed";
    message.addEventListener("mousemove", function () {
      message.classList.toggle("warning");
    });
  }
});

const add = document.getElementById("add");
const inputValue = document.getElementsByName("add")[0];

add.addEventListener("click", function () {
  const newLi = document.createElement("li");
  try {
    newLi.textContent = inputValue.value;
    if (newLi.textContent.trim().length === 0) {
      console.log("empty noted allowed");
      message.innerHTML = "Warning! You're not allowed to insert empty list";
      message.classList.toggle("warning");
    } else {
      menu.insertAdjacentElement("afterbegin", newLi);
    }
  } catch (error) {
  } finally {
    inputValue.value = "";
  }
});

const counts = document.getElementById("count");
const textArea = document.getElementsByName("textArea")[0];
const numberofWords = document.getElementById("numberofWords");
counts.addEventListener("mouseover", function () {
  const numberOfWords = textArea.value.trim().split(/\s+/).length;
  numberofWords.textContent = numberOfWords || 0;
});
const clearTextArea = document.getElementById("clear");
clearTextArea.addEventListener("click", function () {
  if (textArea.value.trim().length === 0) {
    console.log("Nothing to clean");
  } else textArea.value = "";
});
