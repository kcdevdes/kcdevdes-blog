#!/bin/bash

# Get current date and time
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

# Get current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Add all changes
git add .

# Commit with automatic message
git commit -m "Auto commit - $TIMESTAMP"

# Push to the current branch
git push origin "$BRANCH"

# Print success message
echo "✅ Changes successfully pushed to branch: $BRANCH at $TIMESTAMP"
