// Projects Widget JavaScript - Add this to your main site
class ProjectsWidget {
  constructor() {
    this.isOpen = false;
    this.projects = [
      {
        title: 'Ballerina Lint',
        description: 'Code analysis tool',
        icon: '🔍',
        url: '/ballerina-lint/'
      },
      {
        title: 'CPU Scheduler',
        description: 'Algorithm visualizer',
        icon: '⚙️',
        url: '/cpu-scheduling-visualizer/'
      },
      {
        title: 'MS Pet Clinic',
        description: 'Microservices demo',
        icon: '🏥',
        url: '/ms-petclinic/'
      },
      {
        title: 'GoNexus Extension',
        description: 'VS Code extension',
        icon: '📦',
        url: '/gonexus/'
      },
      {
        title: 'Image Segmentation',
        description: 'Computer vision demo',
        icon: '🖼️',
        url: '/image-segmantion/'
      },
      {
        title: 'All Projects',
        description: 'View complete portfolio',
        icon: '📋',
        url: '/projects.html'
      }
    ];
    
    this.init();
  }

  init() {
    this.createWidget();
    this.attachEvents();
  }

  createWidget() {
    const widget = document.createElement('div');
    widget.className = 'projects-widget';
    widget.innerHTML = `
      <button class="projects-toggle" aria-label="Toggle projects menu">
        <span class="toggle-icon">🚀</span>
      </button>
      <div class="projects-menu">
        <div class="projects-menu-header">
          Quick Access
        </div>
        ${this.projects.map(project => `
          <a href="${project.url}" class="project-item">
            <div class="project-icon">${project.icon}</div>
            <div class="project-info">
              <h4>${project.title}</h4>
              <p>${project.description}</p>
            </div>
          </a>
        `).join('')}
      </div>
    `;

    document.body.appendChild(widget);
    this.widget = widget;
    this.toggle = widget.querySelector('.projects-toggle');
    this.menu = widget.querySelector('.projects-menu');
  }

  attachEvents() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.widget.contains(e.target) && this.isOpen) {
        this.closeMenu();
      }
    });

    // Close menu on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.menu.classList.add('active');
    this.toggle.style.transform = 'rotate(45deg)';
    this.isOpen = true;
  }

  closeMenu() {
    this.menu.classList.remove('active');
    this.toggle.style.transform = 'rotate(0deg)';
    this.isOpen = false;
  }
}

// Initialize the widget when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ProjectsWidget();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ProjectsWidget();
  });
} else {
  new ProjectsWidget();
}
