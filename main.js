document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.proyectos-carousel');
    let scrollAmount = 0;

    function scrollRight() {
        if (scrollAmount < (carousel.scrollWidth - carousel.clientWidth)) {
            scrollAmount += carousel.clientWidth / 2; // Mueve por la mitad del contenedor para mostrar dos proyectos
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }

    function scrollLeft() {
        if (scrollAmount > 0) {
            scrollAmount -= carousel.clientWidth / 2; // Mueve por la mitad del contenedor para mostrar dos proyectos
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }

    // Añade botones para navegación
    const btnPrev = document.createElement('button');
    btnPrev.innerHTML = '&#10094;'; // Símbolo de "previo"
    btnPrev.classList.add('btn-prev');
    btnPrev.onclick = scrollLeft;

    const btnNext = document.createElement('button');
    btnNext.innerHTML = '&#10095;'; // Símbolo de "siguiente"
    btnNext.classList.add('btn-next');
    btnNext.onclick = scrollRight;

    document.querySelector('.cont-proyectos').appendChild(btnPrev);
    document.querySelector('.cont-proyectos').appendChild(btnNext);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-toggle').addEventListener('click', function () {
        const navList = document.getElementById('nav-list');
        navList.classList.toggle('active');
    });
});

document.getElementById("btnWpp").addEventListener("click", function () {
    const phoneNumber = "3572503289"; // Tu número de WhatsApp
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank"); // Abre en una nueva pestaña
});
