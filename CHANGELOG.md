# Changelog
## Sri Kanchi Kamakoti Peetam Website

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-12-25

### Added - Initial Release

**Foundation & Core Features:**
- Hugo Extended v0.148.2 static site generator
- Tailwind CSS v4 with PostCSS pipeline
- Responsive mobile-first design
- Full-width uniform layout across all sections

**Homepage Components:**
- Featured articles carousel with Swiper.js (max 7 articles, responsive 1/2/3 columns)
- Yatra details, upcoming events, and announcements section
- Configurable sidebar (newsletter, magazine, custom links)
- Categories grid with 5 sections (schools, patashalas, social work, branches, services)

**Content Features:**
- Events calendar with FullCalendar.js integration
- Photo gallery with folder-based auto-discovery and GLightbox
- Social sharing on all content pages (Facebook, Twitter, WhatsApp, Email, Copy Link)
- Related content suggestions
- Breadcrumb navigation

**SEO & Optimization:**
- Dynamic meta tags (title, description, keywords, canonical)
- Open Graph tags for social media
- Twitter Card integration
- Schema.org structured data (ReligiousOrganization, Article)
- Automated sitemap.xml generation
- robots.txt configuration
- RSS feed

**Performance Features:**
- Lazy loading for images
- Smooth scroll behavior
- Scroll-to-top button
- Conditional script loading (carousel, calendar, gallery)
- Minified and fingerprinted CSS/JS
- Local hosting of libraries (no CDN dependencies)

**Content Management:**
- Archetypes for all content types (posts, events, announcements, categories)
- Data-driven configuration (categories, yatra, sidebar, gallery)
- Easy content creation with Hugo CLI

**Deployment:**
- GitHub Actions workflow for automatic deployment
- GitHub Pages integration
- Custom domain support with HTTPS
- Automated build and deploy pipeline

**Documentation:**
- README.md - Project overview
- CONTENT-GUIDE.md - Content creation guide
- DEPLOYMENT.md - Deployment procedures
- TEST-REPORT.md - Testing documentation
- ASSETS-NEEDED.md - Asset requirements
- MAINTENANCE.md - Maintenance guide
- TECHNICAL-DEBT.md - Technical debt tracking

### Technical Stack

**Core:**
- Hugo Extended 0.148.2
- Node.js 18
- Tailwind CSS 4.0
- PostCSS with Autoprefixer

**Libraries:**
- Swiper.js 11.0.0 (carousel)
- FullCalendar.js 6.1.0 (events)
- GLightbox 3.2.0 (gallery)
- Font Awesome 6.4.0 (icons)

**Deployment:**
- GitHub Pages
- GitHub Actions CI/CD

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

### Accessibility

- Semantic HTML5
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatible
- WCAG 2.1 Level AA (estimated 85-90% compliance)

---

## [Unreleased]

### Planned Additions

**Short-term (3-6 months):**
- Site-wide search functionality
- Multi-language support (Tamil, Sanskrit)
- Newsletter integration
- Analytics dashboard

**Medium-term (6-12 months):**
- Member portal with authentication
- Event registration system
- Blog comments
- Live streaming integration

**Long-term (12+ months):**
- Progressive Web App (PWA)
- Virtual 360° temple tour
- Learning management system
- Mobile applications

### Known Issues

- Test images need replacement with real photos
- OG default image is SVG (should be JPG)
- Favicon is simple placeholder
- Sample content needs replacement

See TECHNICAL-DEBT.md for complete list.

---

## How to Update This Changelog

### For each release, add a new section:

```markdown
## [Version] - YYYY-MM-DD

### Added
- New features or content types

### Changed
- Updates to existing features
- Configuration changes
- Design improvements

### Fixed
- Bug fixes
- Performance improvements
- Security patches

### Deprecated
- Features marked for removal

### Removed
- Removed features or dependencies

### Security
- Security updates or fixes
```

### Version Numbering

**Format:** MAJOR.MINOR.PATCH

- **MAJOR:** Breaking changes, major redesigns
- **MINOR:** New features, non-breaking changes
- **PATCH:** Bug fixes, minor updates

**Examples:**
- `1.0.0` - Initial release
- `1.1.0` - Added new feature (search, multi-language)
- `1.1.1` - Fixed bug, updated images
- `2.0.0` - Major redesign or breaking changes

---

## Maintenance Notes

- Update this file with every deployment
- Link to GitHub issues/PRs where applicable
- Group related changes together
- Keep descriptions concise but clear
- Include dates in YYYY-MM-DD format

---

**Template Version:** 1.0
**Last Updated:** December 25, 2025
