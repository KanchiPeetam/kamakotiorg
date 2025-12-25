# Website Maintenance Guide
## Sri Kanchi Kamakoti Peetam

This guide provides comprehensive maintenance procedures to keep the website running smoothly, secure, and up-to-date.

**Last Updated:** December 25, 2025

---

## 📋 Table of Contents

- [Maintenance Schedule](#maintenance-schedule)
- [Regular Tasks](#regular-tasks)
- [Content Management](#content-management)
- [Technical Maintenance](#technical-maintenance)
- [Security](#security)
- [Performance Monitoring](#performance-monitoring)
- [Backup & Recovery](#backup--recovery)
- [Troubleshooting](#troubleshooting)
- [Contact & Support](#contact--support)

---

## 🗓 Maintenance Schedule

### Daily Tasks (5-10 minutes)
- [ ] Monitor website uptime and accessibility
- [ ] Check for any reported issues
- [ ] Review GitHub Actions deployment status
- [ ] Verify latest content published correctly

### Weekly Tasks (30 minutes)
- [ ] Review website analytics
- [ ] Check for broken links
- [ ] Update upcoming events
- [ ] Add new announcements/content
- [ ] Review and respond to user feedback
- [ ] Monitor site performance (PageSpeed)

### Monthly Tasks (1-2 hours)
- [ ] Update Hugo and npm dependencies
- [ ] Review and optimize images
- [ ] Content audit (outdated content)
- [ ] Check SEO rankings and metrics
- [ ] Review Google Search Console
- [ ] Backup site content and data
- [ ] Test all interactive features
- [ ] Review security alerts

### Quarterly Tasks (2-4 hours)
- [ ] Comprehensive security audit
- [ ] Performance optimization review
- [ ] Accessibility testing (WAVE, screen readers)
- [ ] Content strategy review
- [ ] User experience review
- [ ] Update documentation
- [ ] Review and update maintenance plan
- [ ] Test disaster recovery procedures

### Annual Tasks (1-2 days)
- [ ] Complete site redesign review
- [ ] Technology stack evaluation
- [ ] Comprehensive content audit
- [ ] Major version updates (Hugo, Tailwind, libraries)
- [ ] Full accessibility audit (WCAG compliance)
- [ ] User survey and feedback analysis
- [ ] Analytics review and strategy adjustment
- [ ] Domain renewal (if applicable)
- [ ] SSL certificate renewal check (auto-renewed by GitHub)

---

## 📝 Regular Tasks

### Content Updates

#### Adding a New Post/Article

```bash
# Create new post
hugo new posts/article-title.md

# Edit the file in content/posts/article-title.md
# Add featured_image, description, and tags
# Set draft: false when ready to publish

# Test locally
hugo server -D

# Commit and push
git add content/posts/article-title.md
git commit -m "Add: New article about [topic]"
git push
```

#### Adding a New Event

```bash
# Create new event
hugo new events/event-name.md

# Edit the file
# IMPORTANT: Set event_date field for calendar display
# Set event_time, location, and other details

# Test locally
hugo server -D

# Commit and push
git add content/events/event-name.md
git commit -m "Add: Event - [event name]"
git push
```

#### Updating Homepage Featured Articles

1. Tag posts with `"featured"` in frontmatter
2. Maximum 7 posts will appear (newest first)
3. Remove featured tag from old posts when adding new ones

#### Updating Yatra Information

```bash
# Edit data/yatra.yaml
# Update dates, location, highlights

# Commit and push
git add data/yatra.yaml
git commit -m "Update: Current yatra information"
git push
```

#### Updating Sidebar

```bash
# Edit data/sidebar.yaml
# Enable/disable cards
# Update links, PDFs, URLs

# Commit and push
git add data/sidebar.yaml
git commit -m "Update: Sidebar configuration"
git push
```

#### Adding Gallery Images

```bash
# 1. Create folder if needed
mkdir -p static/images/gallery/album-name

# 2. Copy optimized images to folder
# Images auto-appear in gallery

# 3. Update data/gallery.yaml with album metadata
# Add title, description, slug, thumbnail, path

# 4. Commit and push
git add static/images/gallery/album-name/
git add data/gallery.yaml
git commit -m "Add: Gallery album - [album name]"
git push
```

### Removing Outdated Content

```bash
# Remove old event
rm content/events/old-event.md

# Remove old announcement
rm content/announcements/old-announcement.md

# Commit
git add -u
git commit -m "Remove: Outdated [content type]"
git push
```

---

## 🔧 Technical Maintenance

### Updating Dependencies

#### Check for Updates

```bash
# Check npm packages
npm outdated

# Check Hugo version
hugo version
```

#### Update npm Packages

```bash
# Update package.json dependencies
npm update

# Or update specific package
npm update tailwindcss

# Test build
npm run build
hugo --gc --minify

# If successful, commit
git add package.json package-lock.json
git commit -m "Update: npm dependencies"
git push
```

#### Update Hugo

1. Check latest Hugo release: https://github.com/gohugoio/hugo/releases
2. Download Hugo Extended for your OS
3. Update `.github/workflows/deploy.yml` with new version
4. Test locally with new version
5. Commit and push

```yaml
# In .github/workflows/deploy.yml
env:
  HUGO_VERSION: 0.XXX.X  # Update version here
```

### Monitoring Build Health

#### Check GitHub Actions

1. Go to repository **Actions** tab
2. Review recent workflow runs
3. Look for failed builds (red X)
4. Click on failed builds to view logs
5. Fix issues and push updates

#### Common Build Failures

**Dependency Issues:**
- Run `npm install` locally
- Check for version conflicts
- Update package.json if needed

**Hugo Errors:**
- Check template syntax
- Verify frontmatter format
- Test locally: `hugo --gc --minify`

**Asset Issues:**
- Verify image paths are correct
- Check file exists in static/
- Ensure proper file extensions

---

## 🔐 Security

### Security Checklist

#### Monthly Security Tasks

- [ ] Run `npm audit` to check for vulnerabilities
- [ ] Review GitHub security alerts
- [ ] Check for outdated dependencies
- [ ] Verify HTTPS is working
- [ ] Review access permissions on repository

#### Security Commands

```bash
# Check for npm vulnerabilities
npm audit

# Fix automatically (if safe)
npm audit fix

# Force fix (review changes carefully)
npm audit fix --force
```

#### Repository Security

**Best Practices:**
- Never commit sensitive data (.env files, API keys, passwords)
- Use GitHub Secrets for sensitive environment variables
- Enable branch protection on main branch
- Require pull request reviews for major changes
- Enable 2FA on GitHub account

**Review Access:**
- Regularly audit who has access to repository
- Remove access for team members who leave
- Use least-privilege principle

### Handling Security Vulnerabilities

1. **Identify:** GitHub security alerts or `npm audit`
2. **Assess:** Check severity and impact
3. **Update:** Run `npm update [package]` or `npm audit fix`
4. **Test:** Build and test locally
5. **Deploy:** Commit and push updates
6. **Verify:** Check deployment successful
7. **Document:** Note in TECHNICAL-DEBT.md

---

## ⚡ Performance Monitoring

### Regular Performance Checks

#### Google Lighthouse

1. Open site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Click "Generate report"
5. Target: >90 for all metrics

**Fix common issues:**
- Optimize images (compress, WebP format)
- Minify CSS/JS (already done by Hugo)
- Enable caching (GitHub Pages does this)
- Reduce unused CSS (Tailwind purges automatically)

#### PageSpeed Insights

1. Visit: https://pagespeed.web.dev/
2. Enter your site URL
3. Review scores and recommendations
4. Implement suggestions

#### Monitor Core Web Vitals

- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

### Image Optimization

```bash
# Use online tools:
# - TinyPNG: https://tinypng.com/
# - Squoosh: https://squoosh.app/

# Or use ImageOptim (Mac)
# Or use command-line tools like imagemagick

# After optimization, replace images and commit
git add static/images/
git commit -m "Optimize: Compress images for performance"
git push
```

---

## 💾 Backup & Recovery

### Backup Strategy

#### What to Backup

**Code & Configuration:**
- ✅ Automatically backed up on GitHub
- ✅ Version controlled with git
- ✅ Full history available

**Content:**
- ✅ Markdown files in `content/`
- ✅ Data files in `data/`
- ✅ Images in `static/images/`

**Dependencies:**
- ✅ Listed in package.json
- ✅ Can be reinstalled with `npm install`

#### Manual Backup (Recommended Monthly)

```bash
# Create backup directory
mkdir -p backups/$(date +%Y-%m-%d)

# Copy critical files
cp -r content/ backups/$(date +%Y-%m-%d)/
cp -r data/ backups/$(date +%Y-%m-%d)/
cp -r static/images/ backups/$(date +%Y-%m-%d)/
cp config.toml backups/$(date +%Y-%m-%d)/

# Create archive
tar -czf backups/kamakoti-backup-$(date +%Y-%m-%d).tar.gz backups/$(date +%Y-%m-%d)/

# Store securely (external drive, cloud storage)
```

#### Backup to Cloud

**Option 1: Private GitHub Repository**
- Create private repository for backups
- Push backups regularly

**Option 2: Cloud Storage**
- Google Drive
- Dropbox
- OneDrive
- AWS S3

### Disaster Recovery

#### Scenario 1: Accidental Content Deletion

```bash
# Check git history
git log -- content/posts/deleted-file.md

# Restore file from previous commit
git checkout HEAD~1 -- content/posts/deleted-file.md

# Commit restoration
git commit -m "Restore: Accidentally deleted file"
git push
```

#### Scenario 2: Bad Deployment

```bash
# Revert to previous commit
git revert HEAD

# Or reset to specific commit
git reset --hard <commit-hash>

# Force push (use cautiously)
git push --force
```

#### Scenario 3: Complete Site Loss

1. Clone repository from GitHub
2. Reinstall dependencies: `npm install`
3. Test build: `hugo --gc --minify`
4. Restore images from backup if needed
5. Redeploy: `git push`

---

## 🐛 Troubleshooting

### Common Issues

#### Issue: Site Not Updating After Push

**Symptoms:** Changes pushed but site shows old content

**Solutions:**
1. Check GitHub Actions - is build successful?
2. Clear browser cache (Ctrl+Shift+R)
3. Wait 5-10 minutes for CDN propagation
4. Check if baseURL is correct in config.toml

#### Issue: Images Not Displaying

**Symptoms:** Broken image icons on site

**Solutions:**
1. Verify image path starts with `/images/`
2. Check file exists in `static/images/`
3. Verify filename matches exactly (case-sensitive)
4. Check browser console for 404 errors
5. Ensure image was committed and pushed

#### Issue: Carousel Not Working

**Symptoms:** Featured articles not sliding

**Solutions:**
1. Check if posts have `"featured"` tag
2. Verify at least 1 featured post exists
3. Check browser console for JavaScript errors
4. Clear cache and reload
5. Test in different browser

#### Issue: Calendar Not Showing Events

**Symptoms:** Events calendar is empty

**Solutions:**
1. Verify events have `event_date` field
2. Check date format is YYYY-MM-DD
3. Ensure events are not drafts
4. Check browser console for errors
5. Verify FullCalendar.js loaded (Network tab)

#### Issue: Build Failing on GitHub Actions

**Symptoms:** Red X on Actions tab

**Solutions:**
1. Click on failed workflow to view logs
2. Check error message for specific issue
3. Test build locally: `hugo --gc --minify`
4. Fix errors and push again
5. Check Hugo version compatibility

#### Issue: Slow Page Load

**Symptoms:** Site takes >5 seconds to load

**Solutions:**
1. Run Lighthouse audit to identify bottlenecks
2. Optimize large images
3. Check for unnecessary JavaScript
4. Verify CDN is working (GitHub Pages CDN)
5. Consider lazy loading more content

---

## 📊 Analytics & Monitoring

### Google Analytics (If Configured)

#### Key Metrics to Monitor

- **Visitors:** Daily/weekly/monthly unique visitors
- **Page Views:** Most popular pages
- **Bounce Rate:** Should be <60%
- **Session Duration:** Average time on site
- **Traffic Sources:** Direct, search, social, referral

#### Monthly Analytics Review

1. Log in to Google Analytics
2. Review key metrics
3. Identify trending content
4. Check for broken pages (404s)
5. Analyze user behavior flow
6. Adjust content strategy based on data

### Google Search Console

#### Weekly Tasks

1. Check search performance
2. Review coverage issues
3. Submit new content via sitemap
4. Monitor mobile usability
5. Check for security issues

#### Submitting Sitemap

URL: `https://yourdomain.com/sitemap.xml`

1. Go to Search Console
2. Click "Sitemaps"
3. Enter sitemap URL
4. Click "Submit"

---

## 📞 Contact & Support

### Internal Contacts

**Website Maintenance Team:**
- Technical Lead: [Name/Email]
- Content Manager: [Name/Email]
- System Administrator: [Name/Email]

**Emergency Contact:**
- 24/7 Support: [Phone/Email]

### External Resources

**Hugo Support:**
- Documentation: https://gohugo.io/documentation/
- Forum: https://discourse.gohugo.io/
- GitHub: https://github.com/gohugoio/hugo

**GitHub Pages:**
- Documentation: https://docs.github.com/en/pages
- Support: https://support.github.com/

**Community:**
- Tailwind CSS: https://tailwindcss.com/docs
- Stack Overflow: https://stackoverflow.com/

### Issue Reporting

**For bugs or issues:**
1. Document the issue (screenshots, error messages)
2. Note steps to reproduce
3. Check if issue exists on multiple devices/browsers
4. Create GitHub issue with details
5. Assign to appropriate team member

---

## 📝 Change Log Template

Keep a CHANGELOG.md to track significant changes:

```markdown
# Changelog

## [Version] - YYYY-MM-DD

### Added
- New feature or content

### Changed
- Updates to existing features

### Fixed
- Bug fixes

### Removed
- Deprecated features
```

---

## ✅ Monthly Maintenance Checklist

Print this checklist and check off each month:

**Month: __________ Year: __________**

### Content
- [ ] Add new content (posts, events, announcements)
- [ ] Remove outdated events
- [ ] Update yatra information (if changed)
- [ ] Review and update gallery

### Technical
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Check for Hugo updates
- [ ] Update dependencies if needed
- [ ] Test all interactive features
- [ ] Run Lighthouse performance test
- [ ] Check GitHub Actions status

### SEO & Analytics
- [ ] Review Google Analytics
- [ ] Check Google Search Console
- [ ] Verify sitemap is current
- [ ] Test social sharing cards

### Security
- [ ] Review GitHub security alerts
- [ ] Check SSL certificate (auto-renewed)
- [ ] Audit repository access
- [ ] Review recent commits

### Backup
- [ ] Create content backup
- [ ] Store backup securely
- [ ] Test backup restoration (quarterly)

### Documentation
- [ ] Update CHANGELOG.md
- [ ] Document any issues found
- [ ] Update maintenance notes

**Completed By:** ___________________
**Date:** ___________________
**Notes:**
________________________________________________________________
________________________________________________________________
________________________________________________________________

---

## 🚀 Future Enhancements

### Planned Improvements

**Short-term (3-6 months):**
- [ ] Implement site-wide search (Lunr.js or Algolia)
- [ ] Add multi-language support (Tamil, Sanskrit)
- [ ] Newsletter integration (Mailchimp/SendGrid)
- [ ] Advanced analytics dashboard

**Medium-term (6-12 months):**
- [ ] Member portal with login
- [ ] Event registration system
- [ ] Blog comments system
- [ ] Live streaming integration
- [ ] Mobile app companion

**Long-term (12+ months):**
- [ ] Progressive Web App (PWA)
- [ ] Virtual 360° temple tour
- [ ] Learning management system
- [ ] Donation platform integration
- [ ] Mobile iOS/Android apps

### Enhancement Requests

Document feature requests here for review:

| Date | Request | Priority | Status | Assigned To |
|------|---------|----------|--------|-------------|
|      |         |          |        |             |

---

## 📚 Additional Documentation

- **README.md** - Project overview
- **CONTENT-GUIDE.md** - Content creation guide
- **DEPLOYMENT.md** - Deployment procedures
- **TEST-REPORT.md** - Testing documentation
- **ASSETS-NEEDED.md** - Asset requirements
- **TECHNICAL-DEBT.md** - Technical debt tracking

---

**Maintenance Plan Version:** 1.0
**Last Reviewed:** December 25, 2025
**Next Review Due:** March 25, 2026

---

*Keep this document updated as processes and procedures evolve.*
