// Lazy Loading for Images
// Uses Intersection Observer API for better performance

function initLazyLoad() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          // Load the image
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }

          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }

          // Remove lazy class and add loaded class
          img.classList.remove('lazy');
          img.classList.add('loaded');

          // Stop observing this image
          observer.unobserve(img);
        }
      });
    }, {
      // Start loading when image is 200px away from viewport
      rootMargin: '200px 0px',
      threshold: 0.01
    });

    // Select all images with lazy class
    const lazyImages = document.querySelectorAll('img.lazy');

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyImages = document.querySelectorAll('img.lazy');

    lazyImages.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      img.classList.remove('lazy');
      img.classList.add('loaded');
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLazyLoad);
} else {
  initLazyLoad();
}

export default initLazyLoad;
