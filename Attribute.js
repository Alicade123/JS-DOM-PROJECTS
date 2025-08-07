const changeAvatar = () => {
  const image_avatar = document.getElementById("avatar");
  const avatar_url = document.getElementById("avatar-url");
  if (avatar_url.value.trim().length === 0) alert("Your url is empty!");
  else image_avatar.setAttribute("src", avatar_url.value);
};

const toggleStatus = () => {
  const statusEl = document.getElementById("status");
  const currentStatus = statusEl.getAttribute("data-status");
  if (currentStatus === "offline") {
    statusEl.setAttribute("data-status", "online");
    statusEl.classList.toggle("green");
    statusEl.textContent = "Status: Online";
  } else {
    statusEl.setAttribute("data-status", "offline");
    statusEl.classList.toggle("red");
    statusEl.textContent = "Status: Offline";
  }
};

const addTooltip = () => {
  const profile_card = document.getElementById("profile-card");
  profile_card.setAttribute("title", "This is Alicade's Profile");
  alert("ToolTip is added successful");
};

const removeTooltip = document.getElementById("removeToolTip");
removeTooltip.addEventListener("click", function () {
  const profile_card = document.getElementById("profile-card");
  profile_card.removeAttribute("title");
  alert("ToolTip is removed successful");
});

const checkTooltip = () => {
  const profile_card = document.getElementById("profile-card");
  const tooltipExists = profile_card.hasAttribute("title");
  if (tooltipExists === true) alert("Yes! The ToolTip is created");
  else alert("No! The ToolTip is not created.");
};

const nowTest = () => {
  const meAsButton = document.getElementsByName("test")[0];
  const stylesAppliedOnMe = window.getComputedStyle(meAsButton);
  console.log(stylesAppliedOnMe); //object
};
