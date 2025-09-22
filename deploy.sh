#!/bin/bash

echo "🚀 Deploying Shelfie to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build:pages

# Add all changes
echo "📝 Adding changes to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: Update website with latest changes"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your website will be available at: https://shelfieplatform.github.io/shelfie.github.io/"
echo "⏰ It may take a few minutes for GitHub Pages to update."
