---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
description: "Brief description of the Veda Patashala"
featured_image: "/images/patashalas/your-image.jpg"

# Patashala Details
location: "City, State"
established: ""
vedas_taught: []  # e.g., ["Rig Veda", "Yajur Veda", "Sama Veda", "Atharva Veda"]

# Contact Information
contact:
  address: "Full address"
  phone: "+91-"
  email: ""

# Student Information
capacity: 0  # Number of students
accommodation: false  # true/false - residential facility available
admission_age: ""  # e.g., "8-15 years"

tags: ["patashala", "vedic-education"]
---

## About {{ replace .File.ContentBaseName "-" " " | title }}

Describe the Veda Patashala, its tradition, and teaching methodology.

## Vedas Taught

List the Vedas and subjects taught.

## Admission Process

Information about enrollment, eligibility, and process.

## Contact Information

For more information about admissions and courses.
