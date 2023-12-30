document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Cambia de slide cada 3 segundos (3000 milisegundos)
    setInterval(nextSlide, 3000);

    // Muestra el primer slide al cargar la página
    showSlide(currentSlide);

    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const slidesArray = Array.from(slides);

    slidesArray.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = slide.querySelector('img').src;
        });
    });

    // Cerrar modal al hacer clic en la "x"
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
