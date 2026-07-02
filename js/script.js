const stage = document.querySelector(".stage");
const openButton = document.querySelector("#openInvite");

function openInvitation() {
  if (!stage) return;

  stage.classList.add("opened");
  document.body.style.overflow = "auto";
}

if (openButton) {
  openButton.addEventListener("click", openInvitation);
  openButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openInvitation();
    }
  });
}
