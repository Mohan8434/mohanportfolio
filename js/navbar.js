// Nav-bar scroll effect
window.addEventListener("scroll", () => { 
  const navbarElement = document.querySelector(".navbar"); 
  if (window.scrollY > 80) { 
    navbarElement.classList.add("scrolled"); 
  } else { 
    navbarElement.classList.remove("scrolled"); 
  } 
}); 

// Mobile menu toggle effect
const portfolioMenuBtn = document.querySelector('.menu-btn'); 
const portfolioNavContainer = document.querySelector('.nav-links'); 

if (portfolioMenuBtn && portfolioNavContainer) { 
  // Hamburger button click behavior
  portfolioMenuBtn.addEventListener('click', () => { 
    portfolioMenuBtn.classList.toggle('active'); 
    portfolioNavContainer.classList.toggle('active'); 
  });

  // Links click behavior with delay for smooth scrolling
  const portfolioLinks = portfolioNavContainer.querySelectorAll('a');
  portfolioLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // 0.3 second ka delay taaki browser sahi section par scroll kar sake
      setTimeout(() => {
        portfolioMenuBtn.classList.remove('active'); 
        portfolioNavContainer.classList.remove('active'); 
      }, 300); 
    });
  });
}
