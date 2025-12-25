---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
description: "Brief description of the school"
featured_image: "/images/schools/your-image.jpg"

# School Details
location: "City, State"
established: ""  # Year established (e.g., "1950")
type: "Primary/Secondary/Senior Secondary"

# Contact Information
contact:
  address: "Full address"
  phone: "+91-"
  email: ""
  website: ""

# Additional Information
facilities: []  # e.g., ["Library", "Computer Lab", "Sports Ground"]
medium_of_instruction: "English/Tamil"
affiliated_to: ""  # Board affiliation

tags: ["school", "education"]
---

## About {{ replace .File.ContentBaseName "-" " " | title }}

Describe the school, its history, and mission here.

## Facilities

List the facilities and infrastructure available.

## Admission

Information about admission process, eligibility, etc.

## Contact Us

For more information, please contact:
- **Phone:**
- **Email:**
