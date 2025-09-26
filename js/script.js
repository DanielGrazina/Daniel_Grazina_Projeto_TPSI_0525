// ==============================
// NAV MOBILE
// ==============================
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navToggle.classList.contains('open'));
  });
}

// ==============================
// LIGHTBOX
// ==============================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const images = document.querySelectorAll(
  '.grid-3.featured .card img, .membros-grid .membro-card img, .gallery-preview img, .album-cover'
);

let currentIndex = 0;

// Abrir lightbox
function openLightbox(index) {
  if (!lightbox) return;
  currentIndex = index;
  lightbox.style.display = 'flex';
  lightboxImg.src = images[index].src;
  lightboxImg.alt = images[index].alt;
}

// Fechar lightbox
function closeLightbox() {
  if (lightbox) lightbox.style.display = 'none';
}

// Navegar imagens
function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox(currentIndex);
}

// Eventos para abrir
images.forEach((img, i) => {
  img.addEventListener('click', () => openLightbox(i));
});

// Eventos de navegação
if (prevBtn) prevBtn.addEventListener('click', showPrev);
if (nextBtn) nextBtn.addEventListener('click', showNext);

// Fechar ao clicar no X
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

// Fechar ao clicar fora da imagem
if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
}

// Teclado (ESC, ←, →)
document.addEventListener('keydown', e => {
  if (!lightbox || lightbox.style.display !== 'flex') return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});
