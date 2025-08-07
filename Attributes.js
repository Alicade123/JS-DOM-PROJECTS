function changeAvatar() {
  const img = document.getElementById("avatar");
  const url = document.getElementById("avatar-url").value;
  img.setAttribute("src", url);
}

function toggleStatus() {
  const statusEl = document.getElementById("status");
  const currentStatus = statusEl.getAttribute("data-status");

  if (currentStatus === "offline") {
    statusEl.setAttribute("data-status", "online");
    statusEl.textContent = "Status: Online";
  } else {
    statusEl.setAttribute("data-status", "offline");
    statusEl.textContent = "Status: Offline";
  }
}

function addTooltip() {
  const card = document.getElementById("profile-card");
  card.setAttribute("title", "This is ABITURIJE's profile");
}

function removeTooltip() {
  const card = document.getElementById("profile-card");
  card.removeAttribute("title");
}

function checkTooltip() {
  const card = document.getElementById("profile-card");
  const hasTitle = card.hasAttribute("title");
  alert(hasTitle ? "Tooltip exists!" : "No tooltip found.");
}
