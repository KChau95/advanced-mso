const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
      slides[currentIndex].classList.remove('opacity-100');
      slides[currentIndex].classList.add('opacity-0');

      currentIndex = (currentIndex + 1) % slides.length;

      slides[currentIndex].classList.remove('opacity-0');
      slides[currentIndex].classList.add('opacity-100');
    }

    setInterval(showNextSlide, 5000);