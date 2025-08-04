const body = document.getElementsByTagName("body")[0];
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
  body.classList.toggle("background");
});
