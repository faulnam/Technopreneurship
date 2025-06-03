// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  console.log('Dimsum Delight website loaded successfully');
  
  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .contact-item, .about-img, .about-text');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animations
  document.querySelectorAll('.product-card, .contact-item, .about-img, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run animation on load and scroll
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
});