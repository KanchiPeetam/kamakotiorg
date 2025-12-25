// Gallery & Lightbox Initialization
// Uses GLightbox for lightbox functionality

document.addEventListener('DOMContentLoaded', function() {
  // Check if GLightbox is loaded
  if (typeof GLightbox === 'undefined') {
    console.error('GLightbox library not loaded');
    return;
  }

  // Debug: Log all gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  console.log('Found gallery items:', galleryItems.length);

  // Log first item's href to verify URL
  if (galleryItems.length > 0) {
    console.log('First image URL:', galleryItems[0].getAttribute('href'));
  }

  // Initialize GLightbox with custom selector
  const lightbox = GLightbox({
    selector: '.gallery-item',
    touchNavigation: true,
    loop: true,
    autoplayVideos: false,
    closeButton: true,
    zoomable: true,
    draggable: true,

    // Skin
    skin: 'clean',

    // Lightbox settings
    openEffect: 'fade',
    closeEffect: 'fade',
    slideEffect: 'slide',

    // More info button (optional)
    moreLength: 0,

    // Callbacks for debugging
    onOpen: function() {
      console.log('Lightbox opened');
    },

    onSlideLoad: function(slide) {
      console.log('Slide loading:', slide);
    }
  });

  console.log('Gallery lightbox initialized with', galleryItems.length, 'items');

  // Add keyboard shortcuts info (optional)
  const addKeyboardInfo = () => {
    const helpText = document.createElement('div');
    helpText.className = 'keyboard-help';
    helpText.innerHTML = `
      <div class="text-xs text-gray-500 mt-2 text-center">
        <span class="mr-4"><kbd>←</kbd> <kbd>→</kbd> Navigate</span>
        <span class="mr-4"><kbd>Esc</kbd> Close</span>
        <span><kbd>Z</kbd> Zoom</span>
      </div>
    `;

    const galleryContent = document.querySelector('.gallery-content');
    if (galleryContent) {
      galleryContent.appendChild(helpText);
    }
  };

  // Uncomment to show keyboard shortcuts
  // addKeyboardInfo();
});

// Add smooth scroll to albums if navigation is added
const smoothScrollToAlbum = (albumId) => {
  const album = document.getElementById(albumId);
  if (album) {
    album.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
