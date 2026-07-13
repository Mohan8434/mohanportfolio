// // 1. Loader Effect
window.addEventListener("load", () => { 
  setTimeout(() => { 
    const loader = document.getElementById("loader");
    if(loader) loader.classList.add("loader-hide"); 
  }, 2200); 
}); 

// 2. Active Navbar Link on Scroll
const sections = document.querySelectorAll("section"); 
const navLinks = document.querySelectorAll(".nav-links a"); 
const portfolioMenuBtn = document.querySelector('.menu-btn'); 
const portfolioNavContainer = document.querySelector('.nav-links'); 

window.addEventListener("scroll", () => { 
  let current = ""; 
  sections.forEach(section => { 
    const sectionTop = section.offsetTop - 120; 
    if (window.scrollY >= sectionTop) { 
      current = section.getAttribute("id"); 
    } 
  }); 

  navLinks.forEach(link => { 
    link.classList.remove("active"); 
    if (link.getAttribute("href") === "#" + current) { 
      link.classList.add("active"); 
    } 
  }); 

  // 3. Navbar Sticky Effect on Scroll
  const navbarElement = document.querySelector(".navbar"); 
  if (navbarElement) {
    if (window.scrollY > 80) { 
      navbarElement.classList.add("scrolled"); 
    } else { 
      navbarElement.classList.remove("scrolled"); 
    } 
  }
}); 

// 4. Mobile Menu Toggle Button (Hamburger Click)
if (portfolioMenuBtn && portfolioNavContainer) { 
  portfolioMenuBtn.addEventListener('click', (e) => { 
    e.stopPropagation(); // Event ko idhar-udhar bhatakne se rokega
    portfolioMenuBtn.classList.toggle('active'); 
    portfolioNavContainer.classList.toggle('active'); 
  }); 
}

// 5. Links click karne par section pe jaye aur menu TURANT BAND ho jaye
navLinks.forEach(link => { 
  link.addEventListener('click', () => { 
    if (portfolioMenuBtn && portfolioNavContainer) {
      portfolioMenuBtn.classList.remove('active'); 
      portfolioNavContainer.classList.remove('active'); 
    }
  }); 
});
