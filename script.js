const revealEls = document.querySelectorAll(".reveal");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => revealObserver.observe(el));

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

document.addEventListener("click", (event) => {
  if (!nav.classList.contains("open")) {
    return;
  }

  const clickedToggle = menuToggle.contains(event.target);
  const clickedNav = nav.contains(event.target);

  if (!clickedToggle && !clickedNav) {
    nav.classList.remove("open");
  }
});
