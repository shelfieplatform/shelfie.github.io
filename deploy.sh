#!/bin/bash

# Shelfie GitHub Pages Deployment Script
echo "🚀 Building Shelfie for GitHub Pages..."

# Build the project
npm run build:pages

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Files built to: ./dist/"
    echo ""
    echo "Next steps:"
    echo "1. Commit and push your changes:"
    echo "   git add ."
    echo "   git commit -m 'Deploy to GitHub Pages'"
    echo "   git push origin main"
    echo ""
    echo "2. Configure GitHub Pages:"
    echo "   - Go to your repository settings"
    echo "   - Navigate to Pages section"
    echo "   - Select 'GitHub Actions' as source"
    echo "   - The workflow will automatically deploy"
    echo ""
    echo "3. Your site will be available at:"
    echo "   https://yourusername.github.io/shelfie.github.io/"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
