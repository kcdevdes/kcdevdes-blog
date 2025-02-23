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

# Step 2: Check if any files were converted
if [ "$CONVERTED" = false ]; then
    echo "ℹ️ No .md files found in '$TARGET_DIR'. No changes to commit."
    exit 0
fi

# Step 3: Get current branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Step 4: Add all changes to Git
git add .

# Step 5: Commit with an auto-generated message
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "Auto-converted .md to .mdx and pushed - $TIMESTAMP"

# Step 6: Push to the current branch
git push origin "$BRANCH"

# Step 7: Success message
echo "🚀 All .md files converted to .mdx and pushed to branch: $BRANCH"
