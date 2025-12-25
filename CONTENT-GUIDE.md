# Content Creation & Editing Guide

This guide explains how to create and manage content for the Sri Kanchi Kamakoti Peetam website.

## 📋 Table of Contents

- [Quick Reference](#quick-reference)
- [Content Types](#content-types)
- [Frontmatter Reference](#frontmatter-reference)
- [Writing Content](#writing-content)
- [Images & Media](#images--media)
- [Data Files](#data-files)
- [Best Practices](#best-practices)

## 🚀 Quick Reference

### Creating New Content

```bash
# Posts/Articles (for homepage carousel if tagged "featured")
hugo new posts/article-title.md

# Events (appears on calendar)
hugo new events/event-name.md

# Announcements
hugo new announcements/announcement-title.md

# Category Content
hugo new mutt-schools/school-name.md
hugo new veda-patashalas/patashala-name.md
hugo new social-work/service-name.md
hugo new mutt-branches/branch-name.md
hugo new other-services/service-name.md
```

### Publishing Content

1. Edit the markdown file in `content/` directory
2. Add images to `static/images/` directory
3. Set `draft: false` in frontmatter when ready to publish
4. Preview with `hugo server -D` before publishing

## 📚 Content Types

### 1. Posts/Articles

**Purpose:** General articles, news, and blog posts. Can be featured on homepage carousel.

**Location:** `content/posts/`

**Create:**
```bash
hugo new posts/my-article.md
```

**Frontmatter Schema:**
```yaml
---
title: "Article Title"
date: 2025-12-25
draft: true
description: "Brief summary for SEO and social media (1-2 sentences)"
featured_image: "/images/posts/your-image.jpg"
tags: ["featured", "education", "temple"]  # Add "featured" for homepage carousel
author: "Sri Kanchi Kamakoti Peetam"
---
```

**Required Fields:**
- `title` - Article title
- `date` - Publication date
- `description` - SEO description (recommended)

**Optional Fields:**
- `featured_image` - Header image (recommended: 1200x800px)
- `tags` - Categories and tags (add "featured" for carousel, max 7 will show)
- `author` - Author name

**Notes:**
- Only posts with `tags: ["featured"]` appear in homepage carousel
- Maximum 7 featured posts shown (newest first)
- Use `<!--more-->` to set excerpt break point

---

### 2. Events

**Purpose:** Upcoming events, ceremonies, workshops, festivals.

**Location:** `content/events/`

**Create:**
```bash
hugo new events/event-name.md
```

**Frontmatter Schema:**
```yaml
---
title: "Event Name"
date: 2025-12-25  # Creation date
draft: true
description: "Brief event description"
featured_image: "/images/events/your-image.jpg"

# Event-specific fields (REQUIRED for calendar)
event_date: 2026-01-15  # REQUIRED: Actual event date (YYYY-MM-DD)
event_time: "10:00 AM"
event_end_date: 2026-01-17  # Optional: for multi-day events
location: "Kanchipuram"

# Optional fields
registration_required: false
registration_link: ""
contact_email: "kanchimutt@gmail.com"
contact_phone: "+91-44-27222115"

tags: ["event", "festival", "temple"]
---
```

**Required Fields:**
- `title` - Event name
- `date` - Content creation date
- `event_date` - **REQUIRED** for calendar display (format: YYYY-MM-DD)
- `description` - Event description

**Important:**
- Events **MUST** have `event_date` to appear on the calendar
- Use `event_end_date` for multi-day events
- Date format must be `YYYY-MM-DD` (e.g., `2026-03-15`)

---

### 3. Announcements

**Purpose:** Important notices, updates, and announcements.

**Location:** `content/announcements/`

**Create:**
```bash
hugo new announcements/announcement-title.md
```

**Frontmatter Schema:**
```yaml
---
title: "Announcement Title"
date: 2025-12-25
draft: true
description: "Brief summary"
featured_image: ""  # Optional
tags: ["announcement"]
priority: "normal"  # Options: urgent, high, normal, low
---
```

**Required Fields:**
- `title` - Announcement title
- `date` - Publication date
- `description` - Summary

**Display:**
- Latest 3 announcements show on homepage
- Sorted by date (newest first)

---

### 4. Mutt Schools

**Purpose:** Educational institutions run by the Mutt.

**Location:** `content/mutt-schools/`

**Create:**
```bash
hugo new mutt-schools/school-name.md
```

**Frontmatter Schema:**
```yaml
---
title: "School Name"
date: 2025-12-25
draft: true
description: "Brief school description"
featured_image: "/images/schools/your-image.jpg"

# School Details
location: "City, State"
established: "1950"  # Year established
type: "Primary/Secondary/Senior Secondary"

# Contact Information
contact:
  address: "Full address"
  phone: "+91-44-12345678"
  email: "school@example.com"
  website: "https://school-website.com"

# Additional Information
facilities: ["Library", "Computer Lab", "Sports Ground", "Hostel"]
medium_of_instruction: "English/Tamil"
affiliated_to: "CBSE/State Board"

tags: ["school", "education"]
---
```

---

### 5. Veda Patashalas

**Purpose:** Vedic learning centers and traditional schools.

**Location:** `content/veda-patashalas/`

**Create:**
```bash
hugo new veda-patashalas/patashala-name.md
```

**Frontmatter Schema:**
```yaml
---
title: "Patashala Name"
date: 2025-12-25
draft: true
description: "Brief description"
featured_image: "/images/patashalas/your-image.jpg"

# Patashala Details
location: "City, State"
established: "1940"
vedas_taught: ["Rig Veda", "Yajur Veda", "Sama Veda"]

# Contact Information
contact:
  address: "Full address"
  phone: "+91-44-12345678"
  email: "patashala@example.com"

# Student Information
capacity: 50  # Number of students
accommodation: true  # Residential facility available
admission_age: "8-15 years"

tags: ["patashala", "vedic-education"]
---
```

---

### 6. Social Work

**Purpose:** Social service activities, charitable programs.

**Location:** `content/social-work/`

**Create:**
```bash
hugo new social-work/service-name.md
```

**Frontmatter Schema:**
```yaml
---
title: "Service Name"
date: 2025-12-25
draft: true
description: "Brief description"
featured_image: "/images/social-work/your-image.jpg"

# Service Details
category: "Healthcare/Food Distribution/Education Support"
location: "Where provided"
frequency: "Daily/Weekly/Monthly/Annual"
beneficiaries: "Who benefits"

# Contact
contact:
  phone: "+91-44-27222115"
  email: "kanchimutt@gmail.com"

# Participation
volunteers_needed: true
donation_accepted: true
donation_link: "https://donate-link.com"

tags: ["social-work", "service"]
---
```

---

### 7. Mutt Branches

**Purpose:** Branch locations of the Mutt.

**Location:** `content/mutt-branches/`

**Create:**
```bash
hugo new mutt-branches/branch-name.md
```

**Frontmatter Schema:**
```yaml
---
title: "Branch Name"
date: 2025-12-25
draft: true
description: "Brief description"
featured_image: "/images/branches/your-image.jpg"

# Branch Details
location: "City, State, Country"
established: "1960"
address: "Full address"

# Contact
contact:
  phone: "+91-44-12345678"
  email: "branch@example.com"
  timings: "Daily 6:00 AM - 8:00 PM"

# Services
services: ["Daily Puja", "Anna Dhanam", "Vedic Classes"]

# Temple Info
deity: "Main deity name"
special_occasions: ["Shivaratri", "Navaratri"]

tags: ["branch", "mutt"]
---
```

---

### 8. Other Services

**Purpose:** Additional services offered by the Mutt.

**Location:** `content/other-services/`

**Create:**
```bash
hugo new other-services/service-name.md
```

**Frontmatter Schema:**
```yaml
---
title: "Service Name"
date: 2025-12-25
draft: true
description: "Brief description"
featured_image: "/images/services/your-image.jpg"

# Service Details
category: "Type of service"
availability: "Available/Seasonal/On Request"
location: "Where available"

# Contact
contact:
  phone: "+91-44-27222115"
  email: "kanchimutt@gmail.com"
  website: ""

# Pricing
pricing: "Free/Donation-based/₹500"
booking_required: false

tags: ["service"]
---
```

---

## ✍️ Writing Content

### Markdown Basics

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

[Link text](https://example.com)

![Image alt text](/images/example.jpg)
```

### Content Structure

**Good structure for articles:**

```markdown
## Introduction

Brief introduction to the topic.

## Main Content

### Subsection 1

Content here.

### Subsection 2

More content.

## Conclusion

Closing thoughts.
```

### Excerpt/Summary

Use `<!--more-->` to define where the excerpt ends:

```markdown
---
title: "My Article"
---

This is the summary that appears in listings.

<!--more-->

This is the full article content that only appears on the article page.
```

---

## 🖼 Images & Media

### Image Guidelines

**Recommended Sizes:**
- Featured images: 1200 x 800 pixels (3:2 ratio)
- Thumbnails: 400 x 300 pixels
- Open Graph: 1200 x 630 pixels

**Formats:**
- Primary: JPG (best for photos)
- Alternative: WebP (better compression, modern browsers)
- Graphics: PNG (transparency needed)
- Icons: SVG (scalable)

**File Size:**
- Optimize images before uploading
- Target: Under 200KB per image
- Tools: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)

### Image Paths

**Featured images in frontmatter:**
```yaml
featured_image: "/images/posts/my-image.jpg"
```

**Images in content:**
```markdown
![Alt text](/images/posts/my-image.jpg)
```

**Image organization:**
```
static/images/
├── posts/           # Article images
├── events/          # Event images
├── schools/         # School images
├── patashalas/      # Patashala images
├── social-work/     # Social service images
├── branches/        # Branch images
├── services/        # Service images
└── gallery/         # Gallery albums
    ├── album1/
    └── album2/
```

### Photo Gallery

**Adding a new album:**

1. Edit `data/gallery.yaml`:
```yaml
albums:
  - title: "New Album Name"
    description: "Album description"
    slug: "new-album"
    thumbnail: "/images/gallery/new-album/cover.jpg"
    path: "static/images/gallery/new-album"
```

2. Create directory and add images:
```bash
mkdir static/images/gallery/new-album
# Copy your images to this directory
```

3. Images auto-appear in gallery (no need to list each one)

**Supported formats:** JPG, JPEG, PNG, GIF, WebP

---

## 📊 Data Files

Data files allow configuration without code changes.

### Categories (Homepage Tiles)

**File:** `data/categories.yaml`

```yaml
categories:
  - title: "Mutt Schools"
    slug: "mutt-schools"
    icon: "fa-school"  # Font Awesome icon
    description: "Educational institutions"

  - title: "New Category"
    slug: "new-category"
    icon: "fa-icon-name"
    description: "Description"
```

### Yatra Details (Homepage)

**File:** `data/yatra.yaml`

```yaml
current_yatra:
  location: "Kanchipuram"
  dates: "January 1-15, 2026"
  description: "Current yatra information"
  details: |
    Additional details about the yatra.
    Multiple lines supported.
```

### Sidebar Configuration

**File:** `data/sidebar.yaml`

**Location:** Appears on homepage (next to Yatra/Events/Announcements) and all content pages

```yaml
newsletter:
  enabled: true
  title: "Subscribe to Newsletter"
  description: "Get updates"
  action_url: "https://subscribe-link.com"
  button_text: "Subscribe"

magazine:
  enabled: true
  title: "Monthly Magazine"
  description: "Read our magazine"
  pdf_url: "/magazines/latest.pdf"
  button_text: "Download PDF"

custom_links:
  - title: "Donate"
    url: "https://donate.example.com"
    icon: "fa-heart"
    description: "Support our cause"
```

### Gallery Albums

**File:** `data/gallery.yaml`

```yaml
albums:
  - title: "Album Name"
    description: "Album description"
    slug: "album-slug"
    thumbnail: "/images/gallery/album-slug/cover.jpg"
    path: "static/images/gallery/album-slug"
```

---

## ✅ Best Practices

### Content Writing

1. **Clear titles** - Descriptive and concise (under 60 characters)
2. **Good descriptions** - Write unique meta descriptions (150-160 characters)
3. **Use headings** - Structure content with H2, H3 headings
4. **Short paragraphs** - 2-4 sentences per paragraph
5. **Active voice** - "We organize events" vs "Events are organized"

### SEO Best Practices

1. **Unique titles** - Each page should have a unique title
2. **Meta descriptions** - Always fill the `description` field
3. **Alt text for images** - Describe images for accessibility
4. **Internal links** - Link to related content
5. **Keywords** - Use relevant tags

### Images

1. **Always optimize** - Compress before uploading
2. **Use descriptive names** - `temple-ceremony-2025.jpg` not `IMG_1234.jpg`
3. **Add alt text** - Describe images in markdown
4. **Consistent sizing** - Use recommended dimensions
5. **WebP format** - Use for better performance (with JPG fallback)

### Publishing Workflow

1. **Create draft** - Start with `draft: true`
2. **Preview locally** - Use `hugo server -D`
3. **Review content** - Check spelling, grammar, formatting
4. **Test links** - Verify all links work
5. **Check images** - Ensure images load properly
6. **Publish** - Set `draft: false`

### Tags

**Use consistent tags:**
- featured (for carousel)
- education
- temple
- festival
- social-work
- announcement
- event
- vedic-education

**Don't:**
- Create too many tags
- Use spaces in tags (use hyphens)
- Mix singular/plural forms

---

## 🎯 Common Tasks

### Make a post appear in homepage carousel

Add `"featured"` to tags:
```yaml
tags: ["featured", "temple"]
```

Note: Only 7 most recent featured posts will show.

### Add an event to the calendar

Ensure `event_date` field is present:
```yaml
event_date: 2026-03-15  # YYYY-MM-DD format
```

### Change homepage yatra information

Edit `data/yatra.yaml` file.

### Add a new category tile on homepage

Edit `data/categories.yaml` and add your category.

### Create a new gallery album

1. Edit `data/gallery.yaml`
2. Create folder in `static/images/gallery/`
3. Add images to folder

### Update sidebar

Edit `data/sidebar.yaml` - no code changes needed. Changes affect both homepage and content pages.

---

## 📞 Need Help?

- Check **README.md** for setup and installation help
- See **ASSETS-NEEDED.md** for asset requirements
- Review Hugo documentation: https://gohugo.io/documentation/
- Markdown guide: https://www.markdownguide.org/

---

*Last updated: December 2025*
