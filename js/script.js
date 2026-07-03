const stage = document.querySelector(".stage");
const openButton = document.querySelector("#openInvite");
const bgMusic = document.querySelector("#bgMusic");

function playMusic() {
  if (!bgMusic) return;

  bgMusic.volume = 0.55;
  bgMusic.play().catch(() => {
    // Mobile browsers may block audio until the first user interaction.
  });
}

function openInvitation() {
  if (!stage) return;

  stage.classList.add("opened");
  document.body.style.overflow = "auto";
  playMusic();
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

if (!openButton && bgMusic) {
  document.addEventListener("pointerdown", playMusic, { once: true });
}
