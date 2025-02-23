#!/bin/bash

# Step 1: Convert .md files to .mdx
TARGET_DIR="posts"
CONVERTED=false

if [ -d "$TARGET_DIR" ]; then
    for file in "$TARGET_DIR"/*.md; do
        if [ -f "$file" ]; then
            mv "$file" "${file%.md}.mdx"
            echo "✅ Renamed: $file → ${file%.md}.mdx"
            CONVERTED=true
        fi
    done
else
    echo "❌ Directory '$TARGET_DIR' not found!"
    exit 1
fi

# Step 2: Get current branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Step 3: Add all changes to Git
git add .

# Step 4: Commit with an auto-generated message
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

if [ "$CONVERTED" = true ]; then
    git commit -m "Auto-converted .md to .mdx and pushed - $TIMESTAMP"
    echo "🚀 .md files were converted to .mdx and committed."
else
    git commit -m "Auto commit - No .md files converted - $TIMESTAMP"
    echo "ℹ️ No .md files found. Committing other changes."
fi

# Step 5: Push to the current branch
git push origin "$BRANCH"

# Step 6: Success message
echo "✅ Changes successfully pushed to branch: $BRANCH"
