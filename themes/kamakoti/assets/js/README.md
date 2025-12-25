# JavaScript Enhancements

This directory contains all JavaScript modules for the Kamakoti theme.

## Structure

```
js/
├── main.js              # Main entry point (site-wide)
├── carousel.js          # Swiper.js carousel (homepage only)
├── calendar.js          # FullCalendar.js integration (events only)
├── share.js             # Social sharing & copy-to-clipboard (single pages)
└── modules/
    ├── lazyload.js      # Image lazy loading
    └── smooth-scroll.js # Smooth scrolling & scroll-to-top
```

## Features

### 1. Lazy Loading (lazyload.js)

**Purpose:** Improve page load performance by loading images only when they're near the viewport.

**Implementation:**
- Uses Intersection Observer API for efficient monitoring
- Images load when they're 200px away from entering viewport
- Graceful fallback for older browsers
- Fade-in transition on load

**How to use:**
Add `lazy` class to images and use `data-src` instead of `src`:
```html
<img class="lazy" data-src="/images/photo.jpg" alt="Description">
```

### 2. Smooth Scroll (smooth-scroll.js)

**Purpose:** Enhanced navigation experience with smooth scrolling.

**Features:**
- Smooth scrolling for all anchor links (`#section-id`)
- Updates URL without page jump
- Works with browser's native smooth scrolling

**Automatic:** All `<a href="#...">` links automatically use smooth scrolling.

### 3. Scroll to Top Button (smooth-scroll.js)

**Purpose:** Quick navigation back to top of page.

**Features:**
- Circular button with chevron icon
- Appears after scrolling 300px down
- Smooth animation on show/hide
- Brand color on hover
- Fixed position (bottom-right)

**Automatic:** Button is automatically added to all pages and appears on scroll.

### 4. Script Optimization

**Performance improvements:**
- Conditional loading: Scripts load only on pages that need them
  - `carousel.js` → Homepage only
  - `calendar.js` → Events pages only
  - `share.js` → Single content pages only
  - `main.js` → All pages
- Defer attribute on all scripts for non-blocking load
- Preconnect hints for external CDN resources
- ES2017 bundling with Hugo Pipes

## Browser Support

- Modern browsers: Full support with Intersection Observer
- Older browsers: Graceful fallback (immediate image loading)
- Minimum: ES2017 compatible browsers

## Performance Impact

- **Lazy loading:** ~30-50% reduction in initial page weight
- **Defer scripts:** Improved First Contentful Paint (FCP)
- **Conditional loading:** Only necessary scripts load per page
- **Preconnect:** Faster external resource loading

## Development

### Adding new modules

1. Create module file in `modules/` directory
2. Export functions/classes
3. Import in `main.js`
4. Test in development mode

### Testing

Run Hugo server and check browser console:
```bash
hugo server
# Look for: "Kamakoti Theme - JavaScript Initialized"
```

## Notes

- All scripts use `defer` attribute for optimal loading
- Hugo Pipes bundles ES6 modules automatically
- Main.js is processed by `js.Build` for module support
- Production builds can be minified by setting minify: true
