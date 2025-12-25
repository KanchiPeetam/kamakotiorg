#!/bin/bash

# Deploy to GitHub Pages - Quick Start Script
# Sri Kanchi Kamakoti Peetam Website

echo "🚀 Deploying to GitHub Pages..."
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo ""
    echo "❓ Enter your GitHub repository URL:"
    echo "   Example: https://github.com/yourusername/kamakotiorg.git"
    read -p "URL: " REPO_URL

    if [ -z "$REPO_URL" ]; then
        echo "❌ Error: Repository URL is required"
        exit 1
    fi

    git remote add origin "$REPO_URL"
    echo "✅ Remote repository added"
fi

# Add all files
echo ""
echo "📝 Adding files to git..."
git add .

# Commit
echo ""
read -p "Enter commit message (or press Enter for default): " COMMIT_MSG
if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Update website content"
fi

git commit -m "$COMMIT_MSG"

# Push
echo ""
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your site will be deployed in 2-3 minutes."
echo ""
echo "📍 Next steps:"
echo "   1. Go to https://github.com/yourusername/yourrepo"
echo "   2. Navigate to Settings → Pages"
echo "   3. Under Source, select 'GitHub Actions'"
echo "   4. Wait for deployment to complete"
echo "   5. Visit your site!"
echo ""
