document.addEventListener('DOMContentLoaded', function () {
    // Initialize the Bootstrap Carousel
    const heroCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
      interval: 5000, // Set the interval (in milliseconds) between slides
    });
  
    // Handle the slide event to update the carousel indicators
    heroCarousel._element.addEventListener('slid.bs.carousel', function (event) {
      const activeIndex = event.to;
      updateCarouselIndicators(activeIndex);
    });const url = 'https://extract-news.p.rapidapi.com/v0/article?url=https%3A%2F%2Fwww.theverge.com%2F2020%2F4%2F17%2F21224728%2Fbill-gates-coronavirus-lies-5g-covid-19';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd7fc555b29msh39bb95de79f85a4p110761jsn074dca2d2299',
            'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
        }
    };
    
    
    
    async function api (){
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error); 
      }
    }
    api()
    (function() {
      "use strict";
    
      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
    
      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }
    
      /**
       * Easy on scroll event listener 
       */
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }
    
      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      let selectHeader = select('#header')
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
          } else {
            selectHeader.classList.remove('header-scrolled')
          }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
      }
    
      /**
       * Back to top button
       */
      let backtotop = select('.back-to-top')
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add('active')
          } else {
            backtotop.classList.remove('active')
          }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
      }
    
      /**
       * Mobile nav toggle
       */
      on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
      })
    
      /**
       * Mobile nav dropdowns activate
       */
      on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
          e.preventDefault()
          this.nextElementSibling.classList.toggle('dropdown-active')
        }
      }, true)
    
      /**
       * Hero carousel indicators
       */
      let heroCarouselIndicators = select("#hero-carousel-indicators")
      let heroCarouselItems = select('#heroCarousel .carousel-item', true)
    
      heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
          heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
      });
    
      /**
       * Porfolio isotope and filter
       */
      window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item'
          });
    
          let portfolioFilters = select('#portfolio-flters li', true);
    
          on('click', '#portfolio-flters li', function(e) {
            e.preventDefault();
            portfolioFilters.forEach(function(el) {
              el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');
    
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
          }, true);
        }
    
      });
    
      /**
       * Initiate portfolio lightbox 
       */
      const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });
    
      /**
       * Portfolio details slider
       */
      new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    
      /**
       * Initiate portfolio details lightbox 
       */
      const portfolioDetailsLightbox = GLightbox({
        selector: '.portfolio-details-lightbox',
        width: '90%',
        height: '90vh'
      });
    
      /**
       * Skills animation
       */
      let skilsContent = select('.skills-content');
      if (skilsContent) {
        new Waypoint({
          element: skilsContent,
          offset: '80%',
          handler: function(direction) {
            let progress = select('.progress .progress-bar', true);
            progress.forEach((el) => {
              el.style.width = el.getAttribute('aria-valuenow') + '%'
            });
          }
        })
      }
    
    })()
  
    // Handle the contextmenu event (right-click) on the carousel
    heroCarousel._element.addEventListener('contextmenu', function (event) {
      // Prevent the default context menu
      event.preventDefault();
  
      // Get information or perform an action when right-clicking
      const activeSlide = document.querySelector('.carousel-item.active');
      const slideTitle = activeSlide.querySelector('h2').innerText;
  
      // Example: Show an alert with the title of the active slide
      alert(`Right-clicked on slide: ${slideTitle}`);
    });
  
    // Function to update the carousel indicators
    function updateCarouselIndicators(activeIndex) {
      const indicators = document.getElementById('hero-carousel-indicators').getElementsByTagName('li');
  
      // Remove the 'active' class from all indicators
      for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
      }
  
      // Add the 'active' class to the indicator corresponding to the active slide
      indicators[activeIndex].classList.add('active');
    }
  });
  