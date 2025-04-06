document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos
    const menuHamburger = document.querySelector('.menu-hamburger');
    const body = document.body;
    
    // Criar overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    body.appendChild(overlay);
    
    // Adicionar evento de clique
    menuHamburger.addEventListener('click', function() {
        body.classList.toggle('menu-aberto');
    });
    
    // Fechar menu ao clicar no overlay
    overlay.addEventListener('click', function() {
        body.classList.remove('menu-aberto');
    });
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu-mobile a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            body.classList.remove('menu-aberto');
        });
    });
});