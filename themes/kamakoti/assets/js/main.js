// Main JavaScript Entry Point
// Initializes all site-wide functionality

import initLazyLoad from './modules/lazyload.js';
import { initSmoothScroll, initScrollToTop } from './modules/smooth-scroll.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('Kamakoti Theme - JavaScript Initialized');

  // Initialize lazy loading
  initLazyLoad();

  // Initialize smooth scroll
  initSmoothScroll();
  initScrollToTop();
});

// Performance optimization: Mark when page is fully loaded
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});
