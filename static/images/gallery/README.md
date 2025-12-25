# Gallery Images Directory

This directory contains all images for the photo gallery.

## Directory Structure

```
images/gallery/
├── temple-events/
│   ├── thumbs/          # Thumbnail images (recommended: 400x300px)
│   │   ├── event1.jpg
│   │   ├── event2.jpg
│   │   └── event3.jpg
│   ├── event1.jpg       # Full-size images (recommended: 1200x900px or larger)
│   ├── event2.jpg
│   └── event3.jpg
├── vedic-education/
│   ├── thumbs/
│   └── ...
├── social-service/
│   ├── thumbs/
│   └── ...
└── architecture/
    ├── thumbs/
    └── ...
```

## Image Guidelines

### Thumbnails (for grid display)
- **Recommended size:** 400x300px (4:3 ratio)
- **Format:** JPG (optimized for web)
- **File size:** < 100KB per image
- **Location:** `/images/gallery/[album-name]/thumbs/`

### Full-size Images (for lightbox)
- **Recommended size:** 1200x900px or larger (4:3 ratio)
- **Format:** JPG (high quality)
- **File size:** < 500KB per image
- **Location:** `/images/gallery/[album-name]/`

### Supported Formats
- JPG/JPEG (recommended)
- PNG
- WebP (for better compression)

## Adding Images to Gallery

1. **Create album directory:**
   ```
   mkdir static/images/gallery/your-album-name
   mkdir static/images/gallery/your-album-name/thumbs
   ```

2. **Add images:**
   - Place full-size images in the album folder
   - Place thumbnails in the `thumbs` subfolder
   - Use consistent naming (e.g., image1.jpg, image2.jpg)

3. **Update gallery configuration:**
   Edit `data/gallery.yaml` and add your album:
   ```yaml
   - title: "Your Album Name"
     description: "Album description"
     slug: "your-album-name"
     photos:
       - image: "/images/gallery/your-album-name/image1.jpg"
         thumbnail: "/images/gallery/your-album-name/thumbs/image1.jpg"
         caption: "Photo caption"
         alt: "Descriptive alt text"
   ```

## Image Optimization Tips

1. **Resize before uploading:**
   - Don't upload original camera photos (too large)
   - Use image editing software to resize appropriately

2. **Compress images:**
   - Use online tools like TinyPNG or Squoosh
   - Target: 70-80% quality for JPGs

3. **Use descriptive filenames:**
   - Good: `temple-festival-2024.jpg`
   - Bad: `IMG_1234.jpg`

4. **Maintain aspect ratio:**
   - Keep consistent 4:3 ratio for best grid display
   - Images will be cropped to fit if ratios differ

## Creating Thumbnails

You can create thumbnails automatically using ImageMagick:

```bash
# Install ImageMagick first
# Then run this in your album directory:
for img in *.jpg; do
  convert "$img" -resize 400x300^ -gravity center -extent 400x300 "thumbs/$img"
done
```

Or use online batch converters:
- Bulkresizephotos.com
- Iloveimg.com

## Performance Best Practices

1. Always provide both thumbnail and full-size versions
2. Use lazy loading (already implemented)
3. Keep file sizes reasonable
4. Use JPG for photos, PNG for graphics with transparency
5. Consider using WebP format for better compression (optional)

## Placeholder Images

For testing, you can use placeholder services:
- https://via.placeholder.com/1200x900
- https://picsum.photos/1200/900

Replace with real photos before deployment.
