# Assets Needed for Production

This document lists the placeholder assets that need to be replaced with professional graphics before going live.

## Images

### 1. Open Graph Default Image
**Current:** `static/images/og-default.svg` (SVG placeholder)
**Needed:** `static/images/og-default.jpg`
**Specifications:**
- Format: JPG or PNG
- Dimensions: 1200 x 630 pixels (exact)
- File size: Under 1 MB
- Purpose: Default image for social media sharing (Facebook, Twitter, LinkedIn)
- Content: Should represent Sri Kanchi Kamakoti Peetam brand

**Note:** The current SVG placeholder works but JPG/PNG is preferred for better compatibility with social media platforms.

### 2. Logo
**Current:** SVG text "Kamakoti" in header
**Status:** Using text-based logo
**Future:** Replace with official Kamakoti logo SVG

## Favicons

### 1. Favicon SVG
**Current:** `static/favicon.svg` (simple "K" placeholder)
**Needed:** Professional favicon design
**Specifications:**
- Format: SVG
- Dimensions: 32 x 32 pixels
- Modern browsers support SVG favicons

### 2. Favicon ICO (for older browsers)
**Current:** Not created
**Needed:** `static/favicon.ico`
**Specifications:**
- Format: ICO (multi-resolution recommended)
- Sizes: 16x16, 32x32, 48x48 pixels
- Purpose: Fallback for older browsers

### 3. Apple Touch Icon (optional but recommended)
**Needed:** `static/apple-touch-icon.png`
**Specifications:**
- Format: PNG
- Dimensions: 180 x 180 pixels
- Purpose: iOS home screen icon

### 4. Web App Manifest Icons (optional)
**Needed:** Various sizes for PWA support
**Sizes:** 192x192, 512x512 pixels

## Content Images

### Featured Article Images
**Location:** `static/images/posts/`
**Current:** Test images from Picsum
**Needed:** Replace with actual temple/event photos
**Specifications:**
- Format: JPG or WebP (for better performance)
- Recommended size: 1200 x 800 pixels (3:2 ratio)
- Optimized for web (compressed)

### Gallery Images
**Location:** `static/images/gallery/[album-name]/`
**Current:** Test images
**Needed:** Actual temple, event, and ceremony photos
**Specifications:**
- Format: JPG or WebP
- Various sizes supported (auto-adjusted by gallery)
- Add a `cover.jpg` for each album as thumbnail

### Category Thumbnails (if needed)
**Location:** `static/images/categories/`
**Status:** Currently using Font Awesome icons
**Future:** Can add custom images for category tiles

## How to Replace Placeholders

1. **Open Graph Image:**
   ```bash
   # Replace the SVG with a JPG
   # Place your image at: static/images/og-default.jpg
   # Then update these files to use .jpg instead of .svg:
   # - themes/kamakoti/layouts/partials/seo/opengraph.html
   # - themes/kamakoti/layouts/partials/seo/twitter-card.html
   ```

2. **Favicons:**
   ```bash
   # Create favicon.ico from your design
   # Place at: static/favicon.ico
   # The SVG favicon will be used by modern browsers,
   # ICO will be used as fallback
   ```

3. **Gallery Images:**
   ```bash
   # Simply drop images into album folders:
   # static/images/gallery/temple-events/
   # static/images/gallery/annual-celebrations/
   # They will appear automatically in the gallery
   ```

## Testing Images

After replacing images, test:
- View pages in browser and check favicon appears
- Share a link on Facebook/Twitter and verify OG image displays
- Check gallery to ensure images load properly
- Verify images are optimized (use tools like TinyPNG, ImageOptim)

## Image Optimization Tips

- Use WebP format for better compression (with JPG fallback)
- Compress images before uploading
- Recommended tools:
  - [TinyPNG](https://tinypng.com/) - Online compression
  - [ImageOptim](https://imageoptim.com/) - Mac app
  - [Squoosh](https://squoosh.app/) - Web-based tool
- For favicon conversion: [RealFaviconGenerator](https://realfavicongenerator.net/)
