document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".form-card");
  const left = document.querySelector(".left-arrow");
  const right = document.querySelector(".right-arrow");

  let index = 0;
  let locked = false;

  function updateUI() {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    left.style.display = index === 0 ? "none" : "flex";
    right.style.display = index === cards.length - 1 ? "none" : "flex";
  }

  function goTo(newIndex) {
    if (locked || newIndex < 0 || newIndex >= cards.length) return;
    locked = true;
    index = newIndex;
    updateUI();
    setTimeout(() => locked = false, 550);
  }

  right.addEventListener("click", () => goTo(index + 1));
  left.addEventListener("click", () => goTo(index - 1));

  updateUI();
});
