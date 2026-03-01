// Footer component: laad op elke pagina dezelfde footer (van de homepage)
(function loadFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;
  fetch('components/footer.html')
    .then(function(r) { return r.ok ? r.text() : Promise.reject(new Error('Footer niet gevonden')); })
    .then(function(html) {
      container.innerHTML = html.trim();
    })
    .catch(function() {
      container.innerHTML = '<footer class="footer"><div class="footer-container"><p>© 2026 TREmora</p></div></footer>';
    });
})();

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navDropdown = document.getElementById('nav-dropdown');
  const header = document.querySelector('.header');

  function closeMenu() {
    if (navDropdown) {
      navDropdown.classList.remove('active');
      if (hamburger) {
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }
  }

  if (hamburger && navDropdown) {
    hamburger.addEventListener('click', function() {
      const isOpen = navDropdown.classList.toggle('active');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Sluit menu bij klik op een link of CTA in het dropdown (mobile UX)
    navDropdown.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Active status: markeer huidige pagina in navigatie
  const navLinks = document.querySelectorAll('.nav-links a[href]');
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href') || '';
    const linkPage = href.split('/').pop();
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  // Header shadow on scroll
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
});
