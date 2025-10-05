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
// ANIMATE ON SCROLL
// ==============================
function initAnimateOnScroll() {
  // Configurar observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        // Parar de observar após animação (performance)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Selecionar elementos para animar
  const animateElements = document.querySelectorAll(
    '.card, .stat-box, .membro-card, .membro-card-historia, ' +
    '.concert-card, .video-card, .record-card, .legacy-card, ' +
    '.collab-card, .trivia-box, .fact-box, .fact-item, ' +
    '.story-card, .community-card, .achievement-card, ' +
    '.timeline-item-chester, .timeline-item-historia, .tour-item, ' +
    '.portugal-card, .festival-card, .intro, .cta, .cta-box, ' +
    '.photo-gallery img, .fan-photo, .fanart-item, ' +
    '.curiosity-feature, .section-divider, .tribute-banner'
  );

  // Observar cada elemento, efeito cascata
  animateElements.forEach((el, index) => {
    el.style.transitionDelay = `${(index % 6) * 0.1}s`;
    observer.observe(el);
  });
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimateOnScroll);
} else {
  initAnimateOnScroll();
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
  '.grid-3.featured .card img, .membros-grid .membro-card img, .gallery-preview img, .album-cover, .container .photo-gallery img'
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

// ==============================
// PÁGINA DE CONTACTO
// ==============================

// Formulário de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const successMsg = document.getElementById('successMessage');
    if (successMsg) {
      successMsg.style.display = 'block';
      this.reset();
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    }
  });
}

// Botão voltar ao topo
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return; // Ignorar links vazios
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});