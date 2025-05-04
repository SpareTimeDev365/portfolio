// Project data
const projects = [
  {
    title: "Pong",
    description: "A simple Pong game which can be played with two players.",
    image: "img/pong.png",
    tags: ["2D", "Arcade"],
    link: "games/pong/index.html"
  }
    // {
    //   title: "Space Adventure",
    //   description: "A 2D space shooter with procedurally generated levels and power-ups.",
    //   image: "test.icon.png",
    //   tags: ["2D", "Action", "Shooter"],
    //   link: "export1/test.html"
    // },
    // {
    //   title: "Forest Explorer",
    //   description: "An atmospheric 3D exploration game set in a mysterious forest.",
    //   image: "https://via.placeholder.com/500x300/111827/ffffff?text=Forest+Explorer",
    //   tags: ["3D", "Adventure", "Exploration"],
    //   link: "#"
    // },
    // {
    //   title: "Puzzle Master",
    //   description: "A challenging puzzle game with unique mechanics and 50+ levels.",
    //   image: "https://via.placeholder.com/500x300/111827/ffffff?text=Puzzle+Master",
    //   tags: ["Puzzle", "2D", "Casual"],
    //   link: "#"
    // },
    // {
    //   title: "Pixel RPG",
    //   description: "A retro-style RPG with turn-based combat and an engaging storyline.",
    //   image: "https://via.placeholder.com/500x300/111827/ffffff?text=Pixel+RPG",
    //   tags: ["RPG", "Pixel Art", "Turn-based"],
    //   link: "#"
    // },
    // {
    //   title: "Racing Simulator",
    //   description: "A realistic 3D racing game with physics-based vehicle controls.",
    //   image: "https://via.placeholder.com/500x300/111827/ffffff?text=Racing+Simulator",
    //   tags: ["3D", "Racing", "Simulation"],
    //   link: "#"
    // },
    // {
    //   title: "Tower Defense",
    //   description: "A strategic tower defense game with multiple enemy types and tower upgrades.",
    //   image: "https://via.placeholder.com/500x300/111827/ffffff?text=Tower+Defense",
    //   tags: ["Strategy", "Tower Defense", "2D"],
    //   link: "#"
    // }
  ];
  
  // Function to create project cards
  function createProjectCards() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    // Check if we're on the home page or projects page
    const isHomePage = window.location.pathname === '/' || window.location.pathname.includes('index.html');
    const projectsToShow = isHomePage ? projects.slice(0, 3) : projects;
    
    projectsToShow.forEach(project => {
      // Create project card
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      
      // Create project image
      const projectImage = document.createElement('img');
      projectImage.src = project.image;
      projectImage.alt = project.title;
      projectImage.className = 'project-image';
      
      // Create project content container
      const projectContent = document.createElement('div');
      projectContent.className = 'project-content';
      
      // Create project title
      const projectTitle = document.createElement('h3');
      projectTitle.className = 'project-title';
      projectTitle.textContent = project.title;
      
      // Create project description
      const projectDescription = document.createElement('p');
      projectDescription.className = 'project-description';
      projectDescription.textContent = project.description;
      
      // Create tags container
      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'project-tags';
      
      // Create tags
      project.tags.forEach(tagText => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tagText;
        tagsContainer.appendChild(tag);
      });
      
      // Create project link
      const projectLink = document.createElement('a');
      projectLink.href = project.link;
      projectLink.className = 'project-link';
      projectLink.textContent = 'View Project';
      
      // Append all elements
      projectContent.appendChild(projectTitle);
      projectContent.appendChild(projectDescription);
      projectContent.appendChild(tagsContainer);
      projectContent.appendChild(projectLink);
      
      projectCard.appendChild(projectImage);
      projectCard.appendChild(projectContent);
      
      projectsContainer.appendChild(projectCard);
    });
  }
  
  // Mobile menu toggle
  function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  }
  
  // Set current year in footer
  function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  // Set active nav link based on current page
  function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      if (currentPage.includes(link.getAttribute('href'))) {
        link.classList.add('active');
      } else if (currentPage === '/' && link.getAttribute('href') === 'index.html') {
        link.classList.add('active');
      }
    });
  }
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    setupMobileMenu();
    setCurrentYear();
    setActiveNavLink();
  });