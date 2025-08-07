// Page Load Events
window.addEventListener("load", () => {
  document.getElementById("status").textContent = "Page fully loaded!";
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded!");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

// Mouse Events
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

// Keyboard Events
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Scroll Events
document.getElementById("scrollBox").addEventListener("scroll", () => {
  console.log("Scrolled inside box!");
});

// Focus Events
document.getElementById("focusInput").addEventListener("focus", () => {
  console.log("Input focused!");
});

// Hashchange Event
window.addEventListener("hashchange", () => {
  console.log("Hash changed to:", location.hash);
});

// Event Delegation
document.getElementById("itemList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert(`You clicked ${e.target.textContent}`);
  }
});

// Simulate Events
document.getElementById("simulateBtn").addEventListener("click", () => {
  const event = new Event("click");
  document.getElementById("clickBtn").dispatchEvent(event);
});

// Custom Events
document.getElementById("customBtn").addEventListener("click", () => {
  const customEvent = new CustomEvent("myCustomEvent", {
    detail: { message: "Hello from custom event!" },
  });
  document.getElementById("customOutput").dispatchEvent(customEvent);
});

document
  .getElementById("customOutput")
  .addEventListener("myCustomEvent", (e) => {
    e.target.textContent = e.detail.message;
  });
