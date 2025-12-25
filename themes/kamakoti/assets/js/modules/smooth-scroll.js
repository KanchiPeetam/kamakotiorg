// Smooth Scroll for Anchor Links
// Provides smooth scrolling behavior for internal links

function initSmoothScroll() {
  // Select all anchor links that start with #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip empty anchors and single #
      if (!href || href === '#') {
        return;
      }

      // Get target element
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });
}

// Scroll to top functionality
function initScrollToTop() {
  // Create scroll to top button
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scroll-to-top';
  scrollBtn.className = 'scroll-to-top hidden';
  scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');

  document.body.appendChild(scrollBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.remove('hidden');
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
      scrollBtn.classList.add('hidden');
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollToTop();
  });
} else {
  initSmoothScroll();
  initScrollToTop();
}

export { initSmoothScroll, initScrollToTop };
