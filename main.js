// =============================================
//  IR-ML LAB — IRML-CER3D Research Portal
//  Main JavaScript
// =============================================

// ─── Translations ──────────────────────────────
const i18n = {
  en: {
    // Nav
    nav_modules: "Modules",
    nav_team: "Team",
    nav_publications: "Publications",

    nav_contact: "Contact",
    nav_subtitle: "IRML-CER3D Research Portal",

    // Hero
    hero_badge: "UPR Cayey · CER3D Project",
    hero_title_line1: "Classification of Aqueous Solubility of Organic Compounds",
    hero_title_line2: "through the Use of a K-Nearest Neighbors Machine Learning Model",
    hero_subtitle: "Integrated educational modules combining infrared spectral analysis with modern machine learning techniques for the CER3D project at the University of Puerto Rico, Cayey.",
    hero_btn_modules: "Explore Modules",
    hero_btn_github: "View on GitHub",
    hero_stat1_label: "Modules",
    hero_stat2_label: "Topics",
    hero_stat3_label: "Institution",
    hero_stat3_val: "UPR Cayey",

    // Modules
    modules_eyebrow: "Learning Resources",
    modules_title: "Educational Modules",
    modules_desc: "Hands-on Jupyter Notebook modules integrating infrared spectroscopy and machine learning, designed for researchers and students.",
    modules_search_placeholder: "Search modules...",
    modules_filter_level: "All Levels",
    modules_filter_beginner: "Beginner",
    modules_filter_intermediate: "Intermediate",
    modules_filter_advanced: "Advanced",
    modules_filter_topic: "All Topics",
    modules_filter_status: "All Status",
    modules_filter_available: "Available",
    modules_filter_coming: "Coming Soon",
    modules_results: "module(s) found",
    modules_no_results: "No modules match your search",
    modules_no_results_desc: "Try different keywords or clear the filters",
    btn_open: "Open Module",
    btn_coming: "Coming Soon",
    module_label: "MODULE",

    // GitHub Banner
    github_title: "Open Source on GitHub",
    github_desc: "All modules are open source and freely available on GitHub. Contributions welcome!",
    github_btn: "View Repository",
    github_notebooks: "Notebooks",
    github_open: "Open Source",



    // Team
    team_eyebrow: "The Researchers",
    team_title: "Meet the Team",
    team_desc: "The dedicated researchers and students behind the IRML-CER3D project.",
    team_pi: "PI",

    

    // Contact
    contact_eyebrow: "Get in Touch",
    contact_title: "Contact Us",
    contact_desc: "Interested in collaboration or have questions about the modules? Reach out!",
    contact_email: "Email",
    contact_github: "GitHub",
    contact_institution: "Institution",
    contact_institution_val: "Universidad de Puerto Rico en Cayey",
    contact_dept: "Department of Chemistry",
    contact_form_title: "Send a Message",
    form_name: "Your Name",
    form_email: "Your Email",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Send Message",

    // Footer
    footer_desc: "Integrated Research in Machine Learning (IRML) — CER3D educational module project at Universidad de Puerto Rico en Cayey.",
    footer_links: "Quick Links",
    footer_resources: "Resources",
    footer_copy: "© 2025 Yadiel Cruz Ortiz · IR-ML Lab · UPR Cayey",
    footer_made: "// IRML-CER3D Project",
  },

  es: {
    // Nav
    nav_modules: "Módulos",
    nav_team: "Equipo",
    nav_publications: "Publicaciones",

    nav_contact: "Contacto",
    nav_subtitle: "Portal de Investigación IRML-CER3D",

    // Hero
    hero_badge: "UPR Cayey · Proyecto CER3D",
    hero_title_line1: "Clasificación de la Solubilidad Acuosa de Compuestos Orgánicos",
    hero_title_line2: "mediante el uso de un modelo de Machine Learning K-Nearest Neighbors",
    hero_subtitle: "Módulos educativos integrados que combinan análisis espectral infrarrojo con técnicas modernas de aprendizaje automático para el proyecto CER3D en la Universidad de Puerto Rico, Cayey.",
    hero_btn_modules: "Explorar Módulos",
    hero_btn_github: "Ver en GitHub",
    hero_stat1_label: "Módulos",
    hero_stat2_label: "Temas",
    hero_stat3_label: "Institución",
    hero_stat3_val: "UPR Cayey",

    // Modules
    modules_eyebrow: "Recursos de Aprendizaje",
    modules_title: "Módulos Educativos",
    modules_desc: "Módulos prácticos en Jupyter Notebook que integran espectroscopía infrarroja y aprendizaje automático, diseñados para investigadores y estudiantes.",
    modules_search_placeholder: "Buscar módulos...",
    modules_filter_level: "Todos los Niveles",
    modules_filter_beginner: "Principiante",
    modules_filter_intermediate: "Intermedio",
    modules_filter_advanced: "Avanzado",
    modules_filter_topic: "Todos los Temas",
    modules_filter_status: "Todos",
    modules_filter_available: "Disponible",
    modules_filter_coming: "Próximamente",
    modules_results: "módulo(s) encontrado(s)",
    modules_no_results: "Ningún módulo coincide con tu búsqueda",
    modules_no_results_desc: "Intenta con otras palabras clave o limpia los filtros",
    btn_open: "Abrir Módulo",
    btn_coming: "Próximamente",
    module_label: "MÓDULO",

    // GitHub Banner
    github_title: "Código Abierto en GitHub",
    github_desc: "Todos los módulos son de código abierto y están disponibles gratuitamente en GitHub. ¡Contribuciones bienvenidas!",
    github_btn: "Ver Repositorio",
    github_notebooks: "Notebooks",
    github_open: "Código Abierto",



    // Team
    team_eyebrow: "Los Investigadores",
    team_title: "Conoce al Equipo",
    team_desc: "Los investigadores y estudiantes dedicados detrás del proyecto IRML-CER3D.",
    team_pi: "IP",

    

    // Contact
    contact_eyebrow: "Contáctanos",
    contact_title: "Contacto",
    contact_desc: "¿Interesado en colaborar o tienes preguntas sobre los módulos? ¡Escríbenos!",
    contact_email: "Correo",
    contact_github: "GitHub",
    contact_institution: "Institución",
    contact_institution_val: "Universidad de Puerto Rico en Cayey",
    contact_dept: "Departamento de Química",
    contact_form_title: "Enviar Mensaje",
    form_name: "Tu Nombre",
    form_email: "Tu Correo",
    form_subject: "Asunto",
    form_message: "Mensaje",
    form_submit: "Enviar Mensaje",

    // Footer
    footer_desc: "Investigación Integrada en Aprendizaje Automático (IRML) — Proyecto de módulos educativos CER3D en la Universidad de Puerto Rico en Cayey.",
    footer_links: "Enlaces Rápidos",
    footer_resources: "Recursos",
    footer_copy: "© 2025 Yadiel Cruz Ortiz · IR-ML Lab · UPR Cayey",
    footer_made: "// Proyecto IRML-CER3D",
  }
};

// ─── State ─────────────────────────────────────
let currentLang = localStorage.getItem('irml-lang') || 'en';
let currentTheme = localStorage.getItem('irml-theme') || 'dark';
let searchQuery = '';
let filterLevel = '';
let filterStatus = '';

// ─── Init ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  renderModules();
  renderTeam();

  initScrollAnimations();
  initParticles();
  initMobileMenu();
  initNavScroll();
  initContactForm();
});

// ─── Theme ─────────────────────────────────────
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('irml-theme', theme);
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (icon && label) {
    if (theme === 'dark') {
      icon.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
      label.textContent = 'Light';
    } else {
      icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
      label.textContent = 'Dark';
    }
  }
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ─── Language ──────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('irml-lang', lang);
  document.documentElement.lang = lang;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) {
      el.textContent = i18n[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key] !== undefined) {
      el.placeholder = i18n[lang][key];
    }
  });

  // Update lang toggle display
  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = lang === 'en' ? 'ES' : 'EN';

  // Re-render dynamic content
  renderModules();
  renderTeam();

}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'es' : 'en');
}

// ─── Modules ───────────────────────────────────
function renderModules() {
  const grid = document.getElementById('modules-grid');
  const count = document.getElementById('results-count');
  if (!grid) return;

  const t = i18n[currentLang];
  const query = searchQuery.toLowerCase();

  const filtered = modulesData.filter(m => {
    const title = (m.title && m.title[currentLang] ? m.title[currentLang].toLowerCase() : '');
    const desc = (m.description && m.description[currentLang] ? m.description[currentLang].toLowerCase() : '');
    const tags = (m.topics ? m.topics.join(' ').toLowerCase() : '');

    const matchesSearch = !query || title.includes(query) || desc.includes(query) || tags.includes(query);
    const matchesLevel = !filterLevel || (m.level && m.level === filterLevel);
    const matchesStatus = !filterStatus ||
      (filterStatus === 'Available' && m.status && m.status.en === 'Available') ||
      (filterStatus === 'Coming Soon' && m.status && m.status.en === 'Coming Soon');

    return matchesSearch && matchesLevel && matchesStatus;
  });

  if (count) {
    count.innerHTML = `<span>${filtered.length}</span> ${t.modules_results}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>${t.modules_no_results}</h3>
        <p>${t.modules_no_results_desc}</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(m => {
    const isAvailable = m.status && m.status.en === 'Available';
    const levelClass = m.level ? `level-tag-${m.level.toLowerCase()}` : '';
    const statusClass = isAvailable ? 'status-available' : 'status-coming';
    const statusText = isAvailable ? t.modules_filter_available : t.btn_coming;
    const moduleDesc = m.description && m.description[currentLang] ? m.description[currentLang] : '';
    const moduleTopics = m.topics ? m.topics.map(topic => `<span class="tag">${topic}</span>`).join('') : '';

    return `
      <article class="module-card animate-fade-up ${!isAvailable ? 'coming-soon' : ''}">
        <div class="module-header">
          <span class="module-number">${t.module_label} ${String(m.id).padStart(2, '0')}</span>
          <span class="module-status ${statusClass}">${statusText}</span>
        </div>
        <h3 class="module-title">${m.title ? m.title[currentLang] : ''}</h3>
        <p class="module-desc">${moduleDesc}</p>
        <div class="module-tags">
          <span class="tag ${levelClass}">${m.level || ''}</span>
          ${moduleTopics}
        </div>
        <div class="module-footer">
          <span class="module-format">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            ${m.format || ''}
          </span>
          ${isAvailable
            ? `<a href="${m.githubUrl}" target="_blank" rel="noopener" class="btn-module">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                ${t.btn_open}
              </a>`
            : `<span class="btn-module-disabled">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                ${t.btn_coming}
              </span>`
          }
        </div>
      </article>`;
  }).join('');

  requestAnimationFrame(() => {
    document.querySelectorAll('.module-card.animate-fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

// Search & filter handlers
function handleSearch(e) {
  searchQuery = e.target.value;
  renderModules();
}

function handleFilterLevel(e) {
  filterLevel = e.target.value;
  renderModules();
}

function handleFilterStatus(e) {
  filterStatus = e.target.value;
  renderModules();
}

// ─── Team ──────────────────────────────────────
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  const t = i18n[currentLang];

  const sorted = [...teamData].sort((a, b) => (b.isPI ? 1 : 0) - (a.isPI ? 1 : 0));

  grid.innerHTML = sorted.map(member => `
    <div class="team-card animate-fade-up ${member.isPI ? 'pi-card' : ''}">
      ${member.isPI ? `<span class="pi-badge">${t.team_pi}</span>` : ''}
      <div class="avatar" style="${!member.image ? `background: linear-gradient(135deg, ${member.color}, ${member.color}88);` : ''}">
        ${member.image 
          ? `<img src="${member.image}" alt="${member.name}" class="avatar-img">` 
          : `<span>${member.initials}</span>`}
      </div >
      <h3 class="team-name">${member.name}</h3>
      ${member.role && member.role[currentLang] ? `<p class=\"team-role\">${member.role[currentLang]}</p>` : ''}
      <p class="team-institution">${member.institution}<br>${member.department[currentLang]}</p>
      <p class="team-bio">${member.bio[currentLang]}</p>
      <div class="team-links">
        ${member.email ? `<a href="mailto:${member.email}" class="team-link" title="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg></a>` : ''}
        ${member.github ? `<a href="${member.github}" target="_blank" rel="noopener" class="team-link" title="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg></a>` : ''}
      </div>
    </div>
  `).join('');

  requestAnimationFrame(() => {
    document.querySelectorAll('.team-card.animate-fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });
}


function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-fade-up').forEach(el => {
    observer.observe(el);
  });
}

// ─── Particles ─────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let animFrame;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '#00d4ff' : '#7c3aed'
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 60 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[j].x - p.x;
        const dy = particles[j].y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animFrame = requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { init(); });
}

// ─── Mobile Menu ───────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ─── Nav Scroll ────────────────────────────────
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });

  // Highlight active nav link
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinksAll.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// ─── Contact Form ──────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const t = i18n[currentLang];
    btn.textContent = currentLang === 'en' ? '✓ Sent!' : '✓ ¡Enviado!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    setTimeout(() => {
      btn.textContent = t.form_submit;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ─── Smooth scroll helper ──────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
