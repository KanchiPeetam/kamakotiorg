---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
description: "Brief summary of the announcement"
featured_image: ""  # Optional
tags: ["announcement"]
priority: "normal"  # Options: urgent, high, normal, low
---

## Announcement

Write your announcement content here.

### Important Details

- **Date:** {{ dateFormat "January 2, 2006" .Date }}
- **Effective From:**
- **Contact:** kanchimutt@gmail.com

For more information, please contact us.
