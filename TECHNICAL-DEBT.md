# Technical Debt Log
## Sri Kanchi Kamakoti Peetam Website

This document tracks known technical debt, placeholder items, and areas for future improvement.

**Last Updated:** December 25, 2025

---

## 🎯 High Priority

### Assets to Replace

| Item | Current Status | Action Required | Priority |
|------|----------------|-----------------|----------|
| **Open Graph Default Image** | SVG placeholder | Replace with JPG (1200x630px) | HIGH |
| **Favicon** | Simple "K" SVG | Professional multi-size favicon set | HIGH |
| **Test Images (Carousel)** | Picsum placeholder | Real temple/event photos | HIGH |
| **Gallery Images** | Test images | Real gallery photos | HIGH |
| **Sample Content** | Lorem ipsum style | Real content from organization | HIGH |

**Action:** See ASSETS-NEEDED.md for complete list and specifications.

---

## ⚠️ Medium Priority

### Performance Optimizations

| Item | Description | Estimated Impact | Effort |
|------|-------------|------------------|--------|
| **WebP Images** | Convert JPG to WebP with fallback | +10-15% page speed | Medium |
| **Critical CSS** | Inline above-fold CSS | Faster FCP | Medium |
| **Font Loading** | Optimize Font Awesome loading | Reduce render blocking | Low |
| **Service Worker** | Add PWA capabilities | Offline access | High |

### Browser Compatibility

| Item | Current Status | Action Required | Notes |
|------|----------------|-----------------|-------|
| **ES2017+ JavaScript** | Modern browsers only | Add transpiling for IE11 | Low priority (IE deprecated) |
| **CSS Grid/Flexbox** | Modern browsers | Add fallbacks if needed | Works on 95%+ browsers |

---

## 📝 Low Priority

### Code Quality

- [ ] Add JSDoc comments to JavaScript functions
- [ ] Add more descriptive CSS comments
- [ ] Consider CSS-in-JS for component styles
- [ ] Add unit tests for JavaScript modules
- [ ] Add integration tests for forms (if implemented)

### Accessibility Enhancements

- [ ] Add skip navigation link
- [ ] Ensure all form inputs have labels (when forms added)
- [ ] Add ARIA live regions for dynamic content
- [ ] Formal WCAG 2.1 AA audit by third party
- [ ] Screen reader testing with actual users

### SEO Improvements

- [ ] Add schema markup for events (Event schema)
- [ ] Add FAQ schema (if FAQ section added)
- [ ] Implement breadcrumb schema markup
- [ ] Add video schema (if videos added)
- [ ] Optimize for featured snippets

---

## 🔮 Future Enhancements

### Requested Features

| Feature | Requested By | Date | Status | Notes |
|---------|-------------|------|--------|-------|
| Site Search | - | - | Planning | Lunr.js or Algolia |
| Multi-language | - | - | Backlog | Tamil, Sanskrit |
| Newsletter | - | - | Backlog | Mailchimp integration |
| Comments | - | - | Backlog | Disqus or similar |

### Technical Improvements

- **Progressive Web App (PWA)**
  - Add manifest.json
  - Implement service worker
  - Enable offline mode
  - Add to home screen capability

- **Advanced Analytics**
  - Heat maps (Hotjar, Crazy Egg)
  - User session recording
  - A/B testing framework
  - Custom event tracking

- **CDN Optimization**
  - Already on GitHub Pages CDN
  - Consider Cloudflare for additional features
  - Image CDN (Cloudinary, imgix)

---

## 🐛 Known Issues

### Non-Critical Bugs

| Issue | Description | Workaround | Fix Priority |
|-------|-------------|------------|--------------|
| None currently | - | - | - |

### Browser-Specific Issues

| Browser | Issue | Status | Notes |
|---------|-------|--------|-------|
| None currently | - | - | - |

---

## 📊 Dependency Updates Needed

### Current Versions

```json
{
  "hugo": "0.148.2",
  "tailwindcss": "^4.0.0",
  "swiper": "^11.0.0",
  "@fullcalendar/core": "^6.1.0",
  "glightbox": "3.2.0"
}
```

### Update Schedule

- **Hugo:** Check quarterly for new versions
- **npm packages:** Check monthly with `npm outdated`
- **Critical security updates:** Apply immediately

---

## 🔍 Code Review Notes

### Areas for Improvement

**Templates:**
- Consider breaking down large partials into smaller components
- Add more template comments for clarity
- Standardize naming conventions

**CSS:**
- Tailwind utility classes work well
- Consider custom components for repeated patterns
- Add CSS variables for theme customization

**JavaScript:**
- ES modules working well
- Add error handling for external library failures
- Consider bundling with esbuild for better optimization

---

## 📝 Documentation Gaps

- [ ] Add inline code comments for complex logic
- [ ] Create video tutorials for content editors
- [ ] Add visual guides for common tasks
- [ ] Create FAQ for common issues
- [ ] Document custom Hugo shortcodes (if created)

---

## 🎨 Design Refinements

### Potential Improvements

- [ ] Add subtle animations (fade in on scroll)
- [ ] Enhance loading states for dynamic content
- [ ] Add skeleton screens for better perceived performance
- [ ] Improve print stylesheet
- [ ] Add dark mode (user preference based)

---

## 🔐 Security Considerations

### Current Status: ✅ Good

- Static site (no server-side vulnerabilities)
- HTTPS enabled
- No user authentication (no password security concerns)
- No database (no SQL injection risk)
- No form processing (no XSS/CSRF risk)

### Future Considerations

**If adding dynamic features:**
- [ ] Implement CSP (Content Security Policy) headers
- [ ] Add rate limiting for APIs
- [ ] Implement CAPTCHA for forms
- [ ] Add input sanitization
- [ ] Regular penetration testing

---

## 💡 Optimization Ideas

### Performance

1. **Image Lazy Loading** - ✅ Already implemented
2. **Code Splitting** - Consider for large JavaScript files
3. **Preload Critical Resources** - Add `<link rel="preload">`
4. **Resource Hints** - Add DNS prefetch, preconnect
5. **HTTP/2 Server Push** - GitHub Pages supports HTTP/2

### User Experience

1. **Loading Indicators** - Add for slow connections
2. **Error Messages** - User-friendly error pages
3. **Empty States** - Better messaging when no content
4. **Smooth Transitions** - Page transitions, element animations
5. **Keyboard Shortcuts** - Power user features

---

## 📅 Technical Debt Review Schedule

### Quarterly Review

- Review all high priority items
- Evaluate and prioritize medium priority items
- Update this document
- Plan sprints for addressing debt

### Annual Review

- Comprehensive technical audit
- Third-party code review (if budget allows)
- Performance benchmarking
- Security assessment
- Technology stack evaluation

---

## ✅ Completed Technical Debt

### Recently Resolved

| Item | Completed Date | Resolved By |
|------|---------------|-------------|
| Initial site build | Dec 25, 2025 | Development Team |
| SEO implementation | Dec 25, 2025 | Development Team |
| Deployment setup | Dec 25, 2025 | Development Team |

---

## 📝 Notes

- Keep this document updated as technical debt is identified
- Link to GitHub issues for trackable items
- Prioritize based on user impact and effort
- Review and update quarterly

---

**Document Version:** 1.0
**Last Updated:** December 25, 2025
**Next Review:** March 25, 2026
