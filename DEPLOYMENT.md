# Deployment Guide - GitHub Pages

This guide explains how to deploy the Sri Kanchi Kamakoti Peetam website to GitHub Pages using GitHub Actions.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [GitHub Pages Configuration](#github-pages-configuration)
- [Deployment Process](#deployment-process)
- [Custom Domain Setup](#custom-domain-setup)
- [Troubleshooting](#troubleshooting)

---

## ✅ Prerequisites

Before deploying, ensure you have:

- [x] GitHub account
- [x] Git installed locally
- [x] All content finalized and tested locally
- [x] Images optimized (see ASSETS-NEEDED.md)
- [x] Custom domain ready (optional)

---

## 🚀 Initial Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub** and create a new repository:
   - Repository name: `kamakotiorg` (or your preferred name)
   - Description: "Sri Kanchi Kamakoti Peetam Official Website"
   - Visibility: Public (required for free GitHub Pages)
   - **Do NOT** initialize with README, .gitignore, or license

2. **Copy the repository URL** (e.g., `https://github.com/yourusername/kamakotiorg.git`)

### Step 2: Initialize Git and Push Code

Open terminal in your project directory (`C:\dev\kamakotiorg`) and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Sri Kanchi Kamakoti Peetam website"

# Add remote repository (replace with your URL)
git remote add origin https://github.com/yourusername/kamakotiorg.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify Files Are Uploaded

Check on GitHub that all files are uploaded, especially:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `config.toml` - Hugo configuration
- `themes/kamakoti/` - Theme directory
- `content/` - Content files
- `static/` - Static assets

---

## ⚙️ GitHub Pages Configuration

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
   - (This is different from the old "Deploy from a branch" method)

### Step 2: Configure baseURL (Important!)

**If using default GitHub Pages URL:**

Your site will be at: `https://yourusername.github.io/kamakotiorg/`

Update `config.toml`:
```toml
baseURL = "https://yourusername.github.io/kamakotiorg/"
```

**If using custom domain (e.g., kamakoti.org):**

Keep `config.toml` as:
```toml
baseURL = "https://kamakoti.org/"
```

**Commit and push the change:**
```bash
git add config.toml
git commit -m "Update baseURL for GitHub Pages"
git push
```

### Step 3: Trigger First Deployment

The GitHub Actions workflow will automatically trigger when you push to the `main` branch.

**To manually trigger:**
1. Go to **Actions** tab on GitHub
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

### Step 4: Monitor Deployment

1. Go to **Actions** tab
2. Click on the running workflow
3. Watch the build and deploy steps
4. Wait for green checkmarks ✅

**Typical deployment time:** 2-3 minutes

### Step 5: Access Your Site

Once deployed successfully:
- **Default URL:** `https://yourusername.github.io/kamakotiorg/`
- Check the **Pages** settings for the exact URL
- Click the URL to view your live site!

---

## 🌐 Custom Domain Setup

### Using Your Own Domain (e.g., kamakoti.org)

#### Step 1: Add Custom Domain in GitHub

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `kamakoti.org`
3. Click **Save**
4. Wait for DNS check (may show pending initially)

#### Step 2: Configure DNS Records

**At your domain registrar (GoDaddy, Namecheap, etc.), add these DNS records:**

**For apex domain (kamakoti.org):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain (www.kamakoti.org):**
```
Type: CNAME
Name: www
Value: yourusername.github.io.
```

#### Step 3: Enable HTTPS

1. Wait for DNS propagation (15 minutes to 48 hours)
2. In GitHub **Pages** settings, check **Enforce HTTPS**
3. GitHub will automatically provision SSL certificate

#### Step 4: Update config.toml

Ensure `config.toml` has:
```toml
baseURL = "https://kamakoti.org/"
```

Commit and push:
```bash
git add config.toml
git commit -m "Set custom domain in config"
git push
```

---

## 🔄 Deployment Process

### Automatic Deployment

Every time you push to the `main` branch, GitHub Actions will:
1. ✅ Checkout the code
2. ✅ Install Hugo Extended v0.148.2
3. ✅ Install Node.js and npm dependencies
4. ✅ Build the site with `hugo --gc --minify`
5. ✅ Deploy to GitHub Pages

### Manual Deployment

To deploy without pushing new code:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow** → **Run workflow**

### Viewing Deployment Status

- **Actions Tab:** See real-time build logs
- **Green checkmark:** Deployment successful ✅
- **Red X:** Deployment failed ❌ (check logs for errors)

---

## 🛠 Troubleshooting

### Common Issues

#### 1. 404 Page Not Found

**Problem:** Site shows 404 error after deployment

**Solutions:**
- Check `baseURL` in `config.toml` matches your GitHub Pages URL
- If using subpath (e.g., `/kamakotiorg/`), ensure baseURL includes it
- Clear browser cache and try incognito mode
- Wait 5-10 minutes for DNS/CDN propagation

#### 2. Deployment Fails with "Hugo Not Found"

**Problem:** GitHub Actions fails with Hugo-related error

**Solutions:**
- Verify `.github/workflows/deploy.yml` exists
- Check Hugo version is `0.148.2` with `extended: true`
- Ensure workflow file is properly formatted (YAML syntax)

#### 3. CSS/JS Not Loading

**Problem:** Site loads but styling is broken

**Solutions:**
- Check `baseURL` in `config.toml` is correct
- Verify static files are in `static/` directory
- Check browser console for 404 errors on assets
- Ensure `hugo --gc --minify` builds without errors locally

#### 4. Custom Domain Not Working

**Problem:** Custom domain shows error or doesn't resolve

**Solutions:**
- Verify DNS records are correct (use `nslookup kamakoti.org`)
- Wait for DNS propagation (up to 48 hours)
- Check CNAME file exists in repository root (GitHub creates this)
- Ensure custom domain is saved in GitHub Pages settings

#### 5. Images Not Displaying

**Problem:** Images show broken link icon

**Solutions:**
- Verify images are in `static/images/` directory
- Check image paths start with `/images/` in frontmatter
- Ensure file names match exactly (case-sensitive)
- Check browser console for 404 errors

#### 6. Workflow Permissions Error

**Problem:** Deployment fails with permissions error

**Solutions:**
- Go to **Settings** → **Actions** → **General**
- Under **Workflow permissions**, select:
  - ✅ Read and write permissions
  - ✅ Allow GitHub Actions to create and approve pull requests
- Click **Save**
- Re-run workflow

---

## 📊 Monitoring Your Site

### After Deployment

**Check these:**
- ✅ Homepage loads correctly
- ✅ All navigation links work
- ✅ Images display properly
- ✅ Carousel functioning
- ✅ Events calendar working
- ✅ Gallery images loading
- ✅ Social sharing buttons functional
- ✅ Mobile responsive
- ✅ HTTPS enabled (if using custom domain)

### Performance Testing

Run these tests on your live site:
1. **Google Lighthouse** (Chrome DevTools)
   - Target: >90 for all metrics

2. **PageSpeed Insights**
   - Visit: https://pagespeed.web.dev/
   - Enter your site URL

3. **GTmetrix**
   - Visit: https://gtmetrix.com/
   - Test performance and get recommendations

### SEO Verification

1. **Google Search Console**
   - Add your site: https://search.google.com/search-console
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Schema.org Validator**
   - Test: https://validator.schema.org/
   - Verify structured data

3. **Facebook Debugger**
   - Test: https://developers.facebook.com/tools/debug/
   - Verify Open Graph tags

4. **Twitter Card Validator**
   - Test: https://cards-dev.twitter.com/validator
   - Verify Twitter Cards

---

## 🔐 Security Best Practices

### Repository Security

- ✅ Never commit sensitive data (.env files, API keys)
- ✅ Use GitHub Secrets for sensitive environment variables
- ✅ Keep dependencies updated (`npm audit`)
- ✅ Review code before pushing to main branch

### HTTPS

- ✅ Always use HTTPS (enforced on custom domains)
- ✅ HSTS headers enabled automatically by GitHub Pages
- ✅ SSL certificate auto-renewed by GitHub

---

## 📝 Making Updates

### Content Updates

1. **Edit content** in `content/` directory
2. **Test locally:** `hugo server -D`
3. **Commit changes:**
   ```bash
   git add content/
   git commit -m "Update: Description of changes"
   git push
   ```
4. **Wait 2-3 minutes** for automatic deployment

### Theme/Design Updates

1. **Edit files** in `themes/kamakoti/`
2. **Test locally:** `hugo server -D`
3. **Build test:** `hugo --gc --minify`
4. **Commit and push:**
   ```bash
   git add themes/
   git commit -m "Design: Description of changes"
   git push
   ```

### Configuration Changes

1. **Edit** `config.toml`, `data/*.yaml`, etc.
2. **Test locally**
3. **Commit and push**

---

## 🎯 Quick Commands Reference

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub (triggers deployment)
git push

# Pull latest changes
git pull

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Merge branch
git merge feature-name
```

---

## 📞 Support

### Resources

- **Hugo Documentation:** https://gohugo.io/documentation/
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Tailwind CSS Docs:** https://tailwindcss.com/docs

### Project Documentation

- `README.md` - Project overview and setup
- `CONTENT-GUIDE.md` - Content creation guide
- `TEST-REPORT.md` - Testing checklist
- `ASSETS-NEEDED.md` - Asset requirements

---

## ✅ Deployment Checklist

Before going live, verify:

- [ ] All content is finalized and proofread
- [ ] Images optimized and compressed
- [ ] Test images replaced with real images
- [ ] OG image is JPG (not SVG placeholder)
- [ ] Favicon is professional (not placeholder)
- [ ] Custom domain configured (if using)
- [ ] HTTPS enabled and working
- [ ] All links tested (internal and external)
- [ ] Mobile responsive on real devices
- [ ] Performance score >90 (Lighthouse)
- [ ] Social sharing tested (Facebook, Twitter)
- [ ] Sitemap submitted to Google Search Console
- [ ] Contact information correct
- [ ] Social media links correct

---

**Deployment Status:** Ready for GitHub Pages ✅

**Last Updated:** December 25, 2025
