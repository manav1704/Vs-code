document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Form handling
  const form = document.getElementById('contact-form');
  const thankYouMessage = document.getElementById('thank-you-message');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      thankYouMessage.innerHTML = `
          <div class="success-message">
              Thanks ${name}! I'll get back to you soon.
          </div>
      `;
      form.reset();
      setTimeout(() => {
          thankYouMessage.innerHTML = '';
      }, 5000);
  });
});