#!/bin/bash

echo "🚀 Manual GitHub Pages Deployment"
echo "=================================="

# Build the project
echo "📦 Building project..."
npm run build:pages

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found. Build failed."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📋 Manual Deployment Steps:"
echo "1. Go to: https://github.com/shelfieplatform/shelfie.github.io"
echo "2. Click 'Add file' → 'Upload files'"
echo "3. Upload these files from your 'dist' folder:"
echo "   - index.html"
echo "   - assets/ folder (drag and drop the entire folder)"
echo "4. Also upload 404.html from your project root"
echo "5. Commit the changes"
echo ""
echo "🔧 GitHub Pages Settings:"
echo "1. Go to Settings → Pages"
echo "2. Source: Deploy from a branch"
echo "3. Branch: main"
echo "4. Folder: / (root)"
echo "5. Save"
echo ""
echo "🌐 Your website will be at: https://shelfieplatform.github.io/shelfie.github.io/"
echo "⏰ It may take 5-10 minutes to go live."
