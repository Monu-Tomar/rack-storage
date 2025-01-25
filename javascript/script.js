document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.links');
    const productsLink = document.querySelector('.menu-item > a'); 
    const nestedLinks = document.querySelector('.nested-links'); 

    hamburger.addEventListener('click', function() {
        links.classList.toggle('active'); 
    });

    productsLink.addEventListener('click', function(event) {
        event.preventDefault();
        nestedLinks.classList.toggle('active'); 
    });
});

// -------------------------- slider -------------------------------- 

let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function moveSlide(step) {
  const items = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.carousel-indicators li');
  
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  updateCarousel();
}

function updateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.carousel-indicators li');
  
  const newTransformValue = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;

  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[currentIndex].classList.add('active');
}

setInterval(() => moveSlide(1), 5000);



// ==== FAQ ============== 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fas fa-plus') { 
            icon.className = "fas fa-minus";
        } else {
            icon.className = "fas fa-plus";
        }
    });
});