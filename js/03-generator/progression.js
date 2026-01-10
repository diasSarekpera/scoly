document.addEventListener("DOMContentLoaded", () => {
  const badges = document.querySelectorAll(".progress-badge");

  badges.forEach(badge => {
    const circle = badge.querySelector(".circle");
    const value = parseInt(badge.getAttribute("data-progress"), 10);
    const radius = 15.9155;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    const offset = circumference - (value / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    setTimeout(() => {
      circle.style.transition = "stroke-dashoffset 1s ease";
      circle.style.strokeDashoffset = offset;
    }, 200);
  });
});

