// Menu Responsivo
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("header nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Galeria Auto-Slide
let gallery = document.querySelector(".gallery");
if (gallery) {
  let index = 0;
  setInterval(() => {
    index = (index + 1) % gallery.children.length;
    gallery.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);
}

// Animações ao Scroll
const elements = document.querySelectorAll(".card, .contact");
window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
