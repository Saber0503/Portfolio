/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT - MOHAMED SABER HUSSEIN YOUSSEF
 * Aspiring Data Engineer | Cairo University
 * Pure Vanilla JavaScript (No Frameworks)
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // Project Details Data (Used for accessible Modal Dialog)
  // --------------------------------------------------------------------------
  const PROJECTS_DATA = {
    'imdb-scraper': {
      title: 'IMDb Top 250 Movies Web Scraper',
      category: 'Data Engineering & Collection',
      tech: ['Python', 'Beautiful Soup', 'Pandas', 'Web Scraping', 'Data Processing'],
      overview: 'Developed a Python-based web scraping project to collect and organize information about movies listed in IMDb\'s Top 250 ranking.',
      features: [
        'Developed a web scraping solution using Beautiful Soup to extract movie information from IMDb.',
        'Used Pandas to organize the collected information into a structured, clean dataset.',
        'Processed the extracted data into a tabular format suitable for further exploration, filtering, and analytical queries.',
        'Applied Python data processing techniques to manage and structure movie details reliably.'
      ],
      architecture: 'Employs an ETL-style workflow: extracts raw HTML via HTTP requests, parses the DOM tree with Beautiful Soup to locate movie ranking nodes, transforms unstructured attributes into structured dictionaries, and loads the data into a Pandas DataFrame.',
      repoNote: 'Repository link is a placeholder until the project repository is published.'
    },
    'beauty-center-db': {
      title: 'Beauty Center Database Management System',
      category: 'Relational Database Design',
      tech: ['Microsoft SQL Server', 'SQL', 'Relational Database Design', 'Entity Modeling'],
      overview: 'Designed a relational database for a beauty center using Microsoft SQL Server to organize operational information, including clients, therapists, services, products, and sessions.',
      features: [
        'Designed a relational database schema representing the core business entities and operational lifecycles.',
        'Created database tables for clients, therapists, services, products, and appointments/sessions.',
        'Defined primary keys, foreign keys, and referential integrity constraints to maintain consistency across tables.',
        'Authored SQL queries to retrieve and manage structured business records.',
        'Organized the database to support efficient information storage and retrieval.'
      ],
      architecture: 'Structured database normalized to 3NF, ensuring minimal data redundancy and consistent relationships between therapists, clients, and service sessions.',
      repoNote: 'Repository link is a placeholder until the project repository is published.'
    },
    'masroofy': {
      title: 'Masroofy — Personal Budget Management Web App',
      category: 'Software Engineering & Architecture',
      tech: ['JavaScript', 'Service Layer Architecture', 'Observer Design Pattern', 'JSDoc', 'UML Sequence Diagrams'],
      overview: 'Developed Masroofy, a JavaScript-based personal budget management application designed to organize expenses and manage budgeting cycles.',
      features: [
        'Implemented budgeting functionality to organize personal expenses across distinct budgeting cycles.',
        'Structured the codebase using a Service Layer architecture to separate business logic from UI and data manipulation components.',
        'Applied the Observer design pattern to support event-driven, decoupled interactions between state changes and views.',
        'Documented the codebase using JSDoc to improve code readability and maintainability for collaborators.',
        'Created seven UML sequence diagrams illustrating application workflows, including budget cycles, expense logging, daily spending limits, budget rollover, and notifications.'
      ],
      architecture: 'Separation of concerns using a Service Layer and Observer design pattern for event dispatching without tightly coupling UI components.',
      repoNote: 'Repository link is a placeholder until the project repository is published.'
    },
    'audio-player': {
      title: 'Enhanced Audio Player',
      category: 'C++ & Audio Systems',
      tech: ['C++', 'JUCE Framework', 'Object-Oriented Programming', 'Audio Processing'],
      overview: 'Developed an enhanced audio player application using C++ and the JUCE framework, providing audio playback controls, playlist management, and audio processing features.',
      features: [
        'Implemented audio playback controls (play, pause, stop, track seeking) to manage audio streams.',
        'Developed playlist functionality to organize, queue, and manage multiple audio files.',
        'Integrated audio processing features to enhance playback control and output stability.',
        'Used C++ programming concepts and OOP principles to structure the application and implement its functionality.'
      ],
      architecture: 'Built upon the JUCE C++ application framework utilizing modular components for UI rendering, playlist state handling, and audio stream routing.',
      repoNote: 'Repository link is a placeholder until the project repository is published.'
    },
    'photo-editor': {
      title: 'Photo Filters & Editor',
      category: 'C++ & Image Manipulation',
      tech: ['C++', 'Image Processing', 'Object-Oriented Programming', 'Algorithms'],
      overview: 'Built a C++ photo editing application featuring multiple image filters and editing tools for manipulating digital images.',
      features: [
        'Developed digital image editing functionality from the ground up.',
        'Implemented multiple photo filters to modify pixel values and visual appearance.',
        'Added image editing tools to provide different manipulation options (brightness, contrast, filters).',
        'Organized image manipulation operations into clean OOP classes within the application.'
      ],
      architecture: 'Pixel-level data representation with algorithms that manipulate RGB matrix arrays safely and efficiently.',
      repoNote: 'Repository link is a placeholder until the project repository is published.'
    },
    'tictactoe': {
      title: 'Tic-Tac-Toe Game',
      category: 'C++ & Programming Fundamentals',
      tech: ['C++', 'Object-Oriented Programming', 'Game Logic', 'Data Structures'],
      overview: 'Developed a Tic-Tac-Toe game in C++ to apply programming fundamentals and Object-Oriented Programming concepts in an interactive application.',
      features: [
        'Implemented the core game logic and turn-based player interactions.',
        'Developed functionality to validate moves, track board state, and determine game outcomes (win, draw).',
        'Applied Object-Oriented Programming concepts to structure the game\'s board, players, and referee components.',
        'Organized the implementation into manageable components to improve code clarity.'
      ],
      architecture: 'Clear OOP modular design separating board state management, player input parsing, and win-condition validation logic.',
      repoNote: 'Repository link is a placeholder until the project repository is published.'
    }
  };

  // --------------------------------------------------------------------------
  // 1. Theme Toggle (Dark Mode Default + localStorage Persistence)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlRoot = document.documentElement;

  function initTheme() {
    // Check saved preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme-preference');
    const themeToApply = savedTheme ? savedTheme : 'dark';

    applyTheme(themeToApply);
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      htmlRoot.setAttribute('data-theme', 'light');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
        themeToggleBtn.setAttribute('title', 'Switch to dark theme');
      }
    } else {
      htmlRoot.removeAttribute('data-theme'); // default is dark
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
        themeToggleBtn.setAttribute('title', 'Switch to light theme');
      }
    }
    localStorage.setItem('theme-preference', theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = htmlRoot.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Toggle & Accessibility
  // --------------------------------------------------------------------------
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMobileNav() {
    if (!navMenu || !mobileNavToggle) return;
    mobileNavToggle.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('open');
  }

  function closeMobileNav() {
    if (!navMenu || !mobileNavToggle) return;
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
  }

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function () {
      const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  // Close mobile nav when clicking a navigation link
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileNav();
    });
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', function (e) {
    if (navMenu && navMenu.classList.contains('open')) {
      if (!navMenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        closeMobileNav();
      }
    }
  });

  // Close mobile nav with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
      closeMobileNav();
      mobileNavToggle.focus();
    }
  });

  // --------------------------------------------------------------------------
  // 3. Scrollspy (Active Navigation Link Highlighting)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = 80;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - headerHeight - 30;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --------------------------------------------------------------------------
  // 4. Scroll Animations (Intersection Observer with Reduced Motion Fallback)
  // --------------------------------------------------------------------------
  const fadeElements = document.querySelectorAll('.fade-in-element');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // Reveal all elements immediately
    fadeElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(function (el) {
      scrollObserver.observe(el);
    });
  }

  // --------------------------------------------------------------------------
  // 5. Project Details Modal Dialog
  // --------------------------------------------------------------------------
  const modalBackdrop = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalTechList = document.getElementById('modal-tech-list');
  const modalOverview = document.getElementById('modal-overview');
  const modalFeaturesList = document.getElementById('modal-features-list');
  const modalArchitecture = document.getElementById('modal-architecture');
  const modalRepoBtn = document.getElementById('modal-repo-btn');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  let lastFocusedElement = null;

  function openProjectModal(projectId, triggerBtn) {
    const data = PROJECTS_DATA[projectId];
    if (!data || !modalBackdrop) return;

    lastFocusedElement = triggerBtn || document.activeElement;

    modalTitle.textContent = data.title;
    modalOverview.textContent = data.overview;
    modalArchitecture.textContent = data.architecture;

    // Render tech tags
    modalTechList.innerHTML = '';
    data.tech.forEach(function (tech) {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.textContent = tech;
      modalTechList.appendChild(tag);
    });

    // Render features list
    modalFeaturesList.innerHTML = '';
    data.features.forEach(function (feat) {
      const li = document.createElement('li');
      li.innerHTML = `
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
        <span>${feat}</span>
      `;
      modalFeaturesList.appendChild(li);
    });

    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  }

  function closeProjectModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Attach click listeners to all project detail trigger buttons
  const detailButtons = document.querySelectorAll('.project-btn-details');
  detailButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId, btn);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // --------------------------------------------------------------------------
  // 6. Contact Form Validation & Demonstration Notice
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatusAlert = document.getElementById('form-status-alert');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).trim().toLowerCase());
  }

  function setFieldError(fieldId, errorMsgId, isError) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(errorMsgId);
    if (!field || !errorEl) return;

    if (isError) {
      field.classList.add('invalid');
      errorEl.classList.add('visible');
    } else {
      field.classList.remove('invalid');
      errorEl.classList.remove('visible');
    }
  }

  if (contactForm) {
    // Remove errors on input
    ['name', 'email', 'subject', 'message'].forEach(function (fieldKey) {
      const field = document.getElementById('form-' + fieldKey);
      if (field) {
        field.addEventListener('input', function () {
          setFieldError('form-' + fieldKey, 'error-' + fieldKey, false);
        });
      }
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameVal = document.getElementById('form-name')?.value.trim();
      const emailVal = document.getElementById('form-email')?.value.trim();
      const subjectVal = document.getElementById('form-subject')?.value.trim();
      const messageVal = document.getElementById('form-message')?.value.trim();

      let hasError = false;

      // Validate Name
      if (!nameVal) {
        setFieldError('form-name', 'error-name', true);
        hasError = true;
      } else {
        setFieldError('form-name', 'error-name', false);
      }

      // Validate Email
      if (!emailVal || !validateEmail(emailVal)) {
        setFieldError('form-email', 'error-email', true);
        hasError = true;
      } else {
        setFieldError('form-email', 'error-email', false);
      }

      // Validate Subject
      if (!subjectVal) {
        setFieldError('form-subject', 'error-subject', true);
        hasError = true;
      } else {
        setFieldError('form-subject', 'error-subject', false);
      }

      // Validate Message
      if (!messageVal) {
        setFieldError('form-message', 'error-message', true);
        hasError = true;
      } else {
        setFieldError('form-message', 'error-message', false);
      }

      if (hasError) {
        if (formStatusAlert) {
          formStatusAlert.classList.remove('visible');
        }
        return;
      }

      // Form validation passed.
      // IMPORTANT REQUIREMENT:
      // Clearly communicate that this form is a front-end demonstration and that
      // sending messages requires a backend or form service. Do NOT falsely report
      // that a message has been sent.
      if (formStatusAlert) {
        const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectVal}`);
        const encodedBody = encodeURIComponent(`Hello Mohamed,\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`);
        const mailtoUri = `mailto:mohamedsaber0503@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

        formStatusAlert.className = 'form-status-alert form-status-alert--info visible';
        formStatusAlert.innerHTML = `
          <strong>Front-End Demonstration Notice:</strong><br>
          This form is currently a front-end demonstration. In this static environment without a live backend or email service integration, messages cannot be delivered directly through this form.<br><br>
          To reach Mohamed directly right now, click the button below to launch your default email client with your drafted message:<br><br>
          <a href="${mailtoUri}" class="btn btn-primary btn-sm" style="display:inline-flex;">
            Send via Email Client (mohamedsaber0503@gmail.com)
          </a>
        `;

        formStatusAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. Back-to-Top Smooth Scrolling
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // Initialize on DOM Ready
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    updateActiveNavLink();
  });

})();
