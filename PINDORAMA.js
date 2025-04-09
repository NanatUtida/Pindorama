document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".CAMPANHA1");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".dot");

    let index = 0;

    function updateCarousel() {
        const offset = -index * 100; // Movimenta baseando 100% do tamanho
        carousel.style.transform = `translateX(${offset}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    nextBtn.addEventListener("click", function () {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0; // Se for o último, volta ao primeiro
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1; // Se for o primeiro, vai para o último
        }
        updateCarousel();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            index = parseInt(dot.getAttribute("data-index"));
            updateCarousel();
        });
    });

    // Ajustar o carrossel ao redimensionar a tela
    window.addEventListener("resize", updateCarousel);

    updateCarousel();
});
