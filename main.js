// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Project Data (would typically come from API in real app)
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React & Node.js",
    tags: ["React", "Node", "MongoDB"],
    image: "https://via.placeholder.com/400x200?text=E-Commerce"
  },
  {
    title: "Task Manager",
    description: "Productivity app with drag-and-drop functionality",
    tags: ["JavaScript", "Firebase"],
    image: "https://via.placeholder.com/400x200?text=Task+Manager"
  }
];

// Render Projects
function renderProjects() {
  const container = document.getElementById('projectContainer');
  
  projects.forEach(project => {
    const projectEl = document.createElement('div');
    projectEl.className = 'project-card';
    projectEl.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-img">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        <a href="#" class="btn">View Project</a>
      </div>
    `;
    container.appendChild(projectEl);
  });
}

// Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  console.log('Form submitted:', formData); // Replace with actual fetch() to backend
  alert('Thanks for your message! I\'ll get back to you soon.');
  e.target.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
