let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;
const currentSlideSpan = document.querySelector('.current-slide');
const totalSlidesSpan = document.querySelector('.total-slides');
const contactBlock = document.getElementById('contact-block');
const contactsLink = document.getElementById('contacts-link');
const toggleButton = document.getElementById('toggle-button');

function updateSlideNumber() {
    const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
    currentSlideSpan.textContent = formattedCurrent;
    totalSlidesSpan.textContent = String(totalSlides).padStart(2, '0');
}

document.getElementById('next').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
    updateSlideNumber();
});

document.getElementById('prev').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
    updateSlideNumber();
});

// Initialize the first slide and slide number
slides[currentIndex].classList.add('active');
updateSlideNumber();

// Toggle contact block visibility
function toggleContactBlock() {
    if (contactBlock.style.right === '0px') {
        contactBlock.style.right = '-150px';
        contactsLink.textContent = 'Контакты';
        toggleButton.textContent = '<';
    } else {
        contactBlock.style.right = '0px';
        contactsLink.textContent = 'Контакты';
        toggleButton.textContent = '>';
    }
}
let autoSlideInterval; 

// Функция для переключения слайдов
function autoSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
    updateSlideNumber();
}

// Функция для запуска автоматического переключения слайдов
function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 4000); // Запускаем переключение каждые 4 секунды (4000 миллисекунд)
}

// Функция для остановки автоматического переключения слайдов
function stopAutoSlide() {
    clearInterval(autoSlideInterval); // Останавливаем интервал
}

// Запускаем автоматическое переключение слайдов
startAutoSlide();

// Добавляем обработчики событий для остановки и запуска автоматического переключения слайдов при наведении и уводе мыши со слайдера
// document.querySelector('.slider').addEventListener('mouseenter', stopAutoSlide);
// document.querySelector('.slider').addEventListener('mouseleave', startAutoSlide);


contactsLink.addEventListener('click', toggleContactBlock);
toggleButton.addEventListener('click', toggleContactBlock);
