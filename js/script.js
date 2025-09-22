// Seleciona todos os elementos com a classe "fade-in" para animação
const fadeElements = document.querySelectorAll('.fade-in');

// Função que adiciona a animação
const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5  // Quando 50% do elemento estiver visível
});

// Observa cada elemento da classe "fade-in"
fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Adicionando animação para a imagem no header
const headerImage = document.querySelector('.header-image img');
headerImage.addEventListener('mouseover', () => {
    headerImage.style.transform = 'scale(1.1)';
});

headerImage.addEventListener('mouseout', () => {
    headerImage.style.transform = 'scale(1)';
});
