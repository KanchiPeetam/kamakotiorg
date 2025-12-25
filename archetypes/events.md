---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
description: "Brief description of the event"
featured_image: "/images/events/your-image.jpg"

# Event-specific fields (REQUIRED for calendar display)
event_date: {{ dateFormat "2006-01-02" (.Date.AddDate 0 0 7) }}  # Actual event date (defaults to 7 days from creation)
event_time: "10:00 AM"
event_end_date: ""  # Optional: for multi-day events
location: "Kanchipuram"

# Optional fields
registration_required: false
registration_link: ""
contact_email: "kanchimutt@gmail.com"
contact_phone: "+91-44-27222115"

tags: ["event", "temple"]
---

## About the Event

Describe the event details here.

## Schedule

- **Date:** {{ dateFormat "Monday, January 2, 2006" (.Date.AddDate 0 0 7) }}
- **Time:** 10:00 AM onwards
- **Venue:** Kanchipuram

## How to Participate

Information about participation, registration, etc.
