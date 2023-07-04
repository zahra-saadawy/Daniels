window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  var carouselElement = document.getElementById('carouselExampleCaptions');

  // Get the carousel indicators
  var indicators = carouselElement.querySelectorAll('.carousel-indicators button');

  // Add event listener for the 'slide.bs.carousel' event
  carouselElement.addEventListener('slide.bs.carousel', function (event) {
    // Get the next slide index
    var nextIndex = event.to;

    // Update the active state of the buttons
    indicators.forEach(function (button, index) {
      if (index === nextIndex) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  });



  
  const navLinks = document.querySelectorAll('.nav-link');
  const cards = document.querySelectorAll('.card');
  
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
  
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
  
      event.target.classList.add('active');
  
      const category = event.target.getAttribute("data-filter");
  
      cards.forEach((card) => {
        if (category === "all" || card.classList.contains(category)) {
          card.classList.remove('d-none');
        } else {
          card.classList.add('d-none');
        }
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    function countUp(element, target, duration) {
      let start = 0;
      let increment = target / (duration / 10);
      let timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        if (start >= target) {
          element.textContent = target;
          clearInterval(timer);
        }
      }, 10);
    }
  
    let countElements = document.querySelectorAll('.count');
    countElements.forEach(element => {
      let target = parseInt(element.dataset.target);
      let duration = 2000; 
      countUp(element, target, duration);
    });
  });

  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrolled = window.scrollY > navbar.offsetHeight;
  
    if (scrolled) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  