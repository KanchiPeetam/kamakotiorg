# Photo Gallery Usage Guide

## Overview

The photo gallery feature allows you to showcase images in organized albums with a beautiful lightbox viewer.

## Features

✓ Responsive grid layout (1-4 columns based on screen size)
✓ Lightbox with zoom, navigation, and captions
✓ Organized by albums/categories
✓ Auto-adjusts different image dimensions
✓ Lazy loading for performance
✓ Touch-friendly navigation
✓ Keyboard shortcuts (←/→ navigate, Esc close, Z zoom)

## Quick Start

### 1. Add Images

Place your images in the gallery directory:

```
static/images/gallery/
└── your-album-name/
    ├── image1.jpg (full-size)
    ├── image2.jpg
    ├── image3.jpg
    └── thumbs/
        ├── image1.jpg (thumbnail)
        ├── image2.jpg
        └── image3.jpg
```

### 2. Configure Album

Edit `data/gallery.yaml`:

```yaml
albums:
  - title: "Your Album Title"
    description: "Brief description of this album"
    slug: "your-album-name"
    photos:
      - image: "/images/gallery/your-album-name/photo1.jpg"
        thumbnail: "/images/gallery/your-album-name/thumbs/photo1.jpg"
        caption: "Photo caption shown in lightbox"
        alt: "Descriptive alt text for accessibility"

      - image: "/images/gallery/your-album-name/photo2.jpg"
        thumbnail: "/images/gallery/your-album-name/thumbs/photo2.jpg"
        caption: "Another photo"
        alt: "Description"
```

### 3. Access Gallery

Visit: `http://yoursite.com/gallery/`

## Configuration Options

Edit `data/gallery.yaml` to customize:

### Album Settings

```yaml
albums:
  - title: "Album Name"          # Display name
    description: "Description"    # Shown below title
    slug: "album-slug"            # URL-friendly identifier
    photos: [...]                 # Array of photos
```

### Photo Settings

```yaml
photos:
  - image: "/path/to/full.jpg"        # Full-size image path (required)
    thumbnail: "/path/to/thumb.jpg"   # Thumbnail path (optional, uses full if not provided)
    caption: "Caption text"           # Shown in lightbox (optional)
    alt: "Alt text"                   # For accessibility (required)
```

### Gallery Settings

```yaml
settings:
  columns:
    mobile: 1      # Images per row on mobile
    tablet: 2      # Images per row on tablet
    desktop: 3     # Images per row on desktop
    wide: 4        # Images per row on wide screens

  aspect_ratio: "auto"  # Options: auto, square, landscape, portrait

  lightbox:
    enabled: true              # Enable/disable lightbox
    show_caption: true         # Show captions in lightbox
    show_counter: true         # Show image counter (1/10)
    keyboard_navigation: true  # Enable keyboard shortcuts
```

## Image Specifications

### Recommended Sizes

| Type       | Dimensions  | Format | Size    | Purpose           |
|------------|-------------|--------|---------|-------------------|
| Thumbnail  | 400x300px   | JPG    | <100KB  | Grid display      |
| Full-size  | 1200x900px+ | JPG    | <500KB  | Lightbox view     |

### Aspect Ratios

- **Recommended:** 4:3 (landscape)
- **Also works well:** 16:9, 3:2, 1:1 (square)
- Images are auto-cropped to fit grid using `object-cover`

## Managing Multiple Albums

You can create unlimited albums in `gallery.yaml`:

```yaml
albums:
  - title: "Events 2024"
    slug: "events-2024"
    photos: [...]

  - title: "Temple Architecture"
    slug: "temple-architecture"
    photos: [...]

  - title: "Community Service"
    slug: "community-service"
    photos: [...]
```

All albums appear on a single page: `/gallery/`

## Lightbox Features

### Navigation
- **Click arrows:** Previous/Next image
- **Keyboard:**
  - `←` Previous image
  - `→` Next image
  - `Esc` Close lightbox
  - `Z` Toggle zoom
- **Touch/Swipe:** Swipe left/right on mobile
- **Click outside:** Close lightbox

### Display
- Full-screen image viewer
- Image caption at bottom
- Image counter (3/12)
- Zoom functionality
- Smooth transitions

## Performance Tips

1. **Always use thumbnails:**
   - Faster page load
   - Better user experience
   - Saves bandwidth

2. **Optimize images:**
   - Compress before uploading
   - Use appropriate dimensions
   - Keep file sizes reasonable

3. **Lazy loading:**
   - Already enabled by default
   - Images load as you scroll

4. **Limit photos per album:**
   - Recommend 20-30 photos per album
   - Create multiple albums for large collections

## Customization

### Change Grid Layout

Edit `themes/kamakoti/assets/css/components/gallery.css`:

```css
@media (min-width: 1280px) {
  .photo-grid {
    @apply grid-cols-5;  /* Change from 4 to 5 columns */
  }
}
```

### Change Image Aspect Ratio

Edit the gallery layout or CSS:

```css
.gallery-item {
  aspect-ratio: 16/9;  /* Change from 4/3 to 16/9 */
}
```

### Customize Lightbox Theme

GLightbox supports custom CSS. Add to your CSS:

```css
.glightbox-clean .gslide-description {
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 20px;
}
```

## Troubleshooting

### Images not appearing
- Check file paths in `gallery.yaml`
- Ensure images exist in `static/images/gallery/`
- Verify image filenames match exactly (case-sensitive)

### Lightbox not working
- Check browser console for JavaScript errors
- Ensure GLightbox library loads (check Network tab)
- Verify gallery section detection in Hugo

### Slow loading
- Optimize/compress images
- Use thumbnails (don't skip this!)
- Check image file sizes

### Layout issues
- Clear browser cache
- Check CSS import in `main.css`
- Verify responsive classes are correct

## Example Complete Album

```yaml
albums:
  - title: "Temple Festival 2024"
    description: "Annual celebration at Sri Kanchi Kamakoti Peetam"
    slug: "temple-festival-2024"
    photos:
      - image: "/images/gallery/festival-2024/opening-ceremony.jpg"
        thumbnail: "/images/gallery/festival-2024/thumbs/opening-ceremony.jpg"
        caption: "Opening ceremony with devotees"
        alt: "Large crowd gathered for temple festival opening"

      - image: "/images/gallery/festival-2024/evening-aarti.jpg"
        thumbnail: "/images/gallery/festival-2024/thumbs/evening-aarti.jpg"
        caption: "Evening aarti with oil lamps"
        alt: "Priests performing evening prayer ceremony"

      - image: "/images/gallery/festival-2024/cultural-program.jpg"
        thumbnail: "/images/gallery/festival-2024/thumbs/cultural-program.jpg"
        caption: "Classical dance performance"
        alt: "Bharatanatyam dancer performing"
```

## Adding to Navigation

To add gallery to main navigation (if you add one later), update your menu configuration:

```toml
[[menu.main]]
  name = "Gallery"
  url = "/gallery/"
  weight = 40
```

## Support

For issues or questions:
1. Check this guide
2. Review `data/gallery.yaml` syntax
3. Check browser console for errors
4. Verify image paths and files exist
