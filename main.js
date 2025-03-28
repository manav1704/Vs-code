document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initPage();
    
    // Load dynamic content
    loadFeaturedProjects();
    loadSkills();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize particles.js if on homepage
    if (document.querySelector('.hero')) {
        initParticles();
    }
    
    // Remove loading state after everything is ready
    setTimeout(() => {
        document.body.classList.remove('is-loading');
    }, 500);
});

function initPage() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
    
    // Set active nav link based on current page
    setActiveNavLink();
    
    // Initialize typing effect if on homepage
    if (document.querySelector('.typing-effect')) {
        initTypingEffect();
    }
}

function setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initialize AOS (Animate On Scroll)
    initAOS();
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.innerHTML = theme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initTypingEffect() {
    const element = document.querySelector('.typing-effect');
    const words = JSON.parse(element.getAttribute('data-words'));
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start the typing effect
    setTimeout(type, 1000);
}

function loadFeaturedProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // In a real app, you would fetch this from an API
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with payment integration.",
            tags: ["React", "Node.js", "MongoDB"],
            image: "assets/project1.jpg",
            link: "projects.html#project1"
        },
        // Add more projects...
    ];
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-aos="fade-up">
            <a href="${project.link}" data-transition="slide">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

function loadSkills() {
    const skillsCloud = document.querySelector('.skills-cloud');
    if (!skillsCloud) return;
    
    const skills = [
        "JavaScript", "React", "Node.js", "HTML5", "CSS3", "SASS",
        "Python", "Django", "Git", "MongoDB", "SQL", "GraphQL",
        "UI/UX Design", "Figma", "Webpack", "Docker", "AWS"
    ];
    
    skillsCloud.innerHTML = skills.map(skill => `
        <div class="skill-item" data-aos="zoom-in">${skill}</div>
    `).join('');
}

function initAOS() {
    // Simple implementation of Animate On Scroll
    const aosElements = document.querySelectorAll('[data-aos]');
    
    function checkAOS() {
        aosElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('aos-animate');
            }
        });
    }
    
    // Check on load and scroll
    checkAOS();
    window.addEventListener('scroll', checkAOS);
}

function initParticles() {
    // This would be initialized by particles.js library
    // Configuration would be in particles.js
    particlesJS('particles-js', {
        // Your particles.js config
    });
}
