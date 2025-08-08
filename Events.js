//1. DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded has loaded sucessful!");
});

//2. load
window.addEventListener("load", function () {
  const status = document.getElementById("status");
  status.textContent = "Page fully loaded!";
  console.log("Load is done!");
});

// //3. beforeLeave
// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   e.returnValue = "";
// });

//4. mouse event
document.getElementById("clickBtn").addEventListener("click", function (e) {
  console.log(e.target.type);
});

//5. Keyboard Events
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

//6. scroll Event
window.addEventListener("scrollend", () => {
  console.log("You scroll is ended!");
});

//7. Focus Events
document.getElementById("focusInput").addEventListener("focus", function () {
  console.log("The input is focused");
});

//8. Event Delegation
document.getElementById("itemList").addEventListener("click", function (evt) {
  if (evt.target.tagName === "LI") {
    console.log(evt.currentTarget);
    console.log(evt.target.textContent);
  }
});

//9.resize
window.addEventListener("resize", () => {
  console.log("The browser is resized!");
});
