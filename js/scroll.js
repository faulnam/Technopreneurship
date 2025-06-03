// Smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      const navMenu = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
      
      // Get the target section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // Calculate position to scroll to (accounting for navbar height)
      const navbarHeight = document.querySelector('#navbar').offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight;
      
      // Scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update active link
      updateActiveLink(targetId);
    });
  });
  
  // Update active nav link based on scroll position
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navbarHeight = document.querySelector('#navbar').offsetHeight;
    
    // Find the current section in view
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navbarHeight - 100; // 100px offset for better UX
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = '#' + section.getAttribute('id');
      }
    });
    
    // Update active link
    updateActiveLink(current);
  });
  
  // Helper function to update active link
  function updateActiveLink(currentSection) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === currentSection) {
        link.classList.add('active');
      }
    });
  }
});

