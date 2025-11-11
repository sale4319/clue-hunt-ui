#!/bin/bash

set -e

echo "🚀 Starting release process..."

# Check if working directory is clean
if ! git diff-index --quiet HEAD --; then
    echo "❌ Working directory is not clean. Please commit your changes first."
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    echo "❌ You must be on main/master branch to release. Current branch: $CURRENT_BRANCH"
    exit 1
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin $CURRENT_BRANCH

# Run tests and linting
echo "🔍 Running linting..."
yarn lint

# Build the project
echo "🔨 Building project..."
yarn build

# Ask user for version type
echo "📦 What type of release is this?"
echo "1) patch (0.4.9 -> 0.4.10)"
echo "2) minor (0.4.9 -> 0.5.0)"
echo "3) major (0.4.9 -> 1.0.0)"
echo "4) beta (0.4.9 -> 0.4.10-beta.0)"
echo "5) alpha (0.4.9 -> 0.4.10-alpha.0)"

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        VERSION_TYPE="patch"
        ;;
    2)
        VERSION_TYPE="minor"
        ;;
    3)
        VERSION_TYPE="major"
        ;;
    4)
        VERSION_TYPE="prerelease --preid=beta"
        ;;
    5)
        VERSION_TYPE="prerelease --preid=alpha"
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

# Create new version
echo "📝 Creating new version..."
yarn version --new-version $VERSION_TYPE --no-git-tag-version

# Get the new version
NEW_VERSION=$(node -p "require('./package.json').version")

# Create git commit and tag
echo "🏷️  Creating git commit and tag..."
git add package.json yarn.lock
git commit -m "chore(release): v$NEW_VERSION"
git tag "v$NEW_VERSION"

# Push changes
echo "⬆️  Pushing changes..."
git push origin $CURRENT_BRANCH
git push origin "v$NEW_VERSION"

# Publish to npm
echo "📦 Publishing to npm..."
yarn npm publish --access public

echo "✅ Successfully released version $NEW_VERSION!"
echo "🔗 Check it out: https://www.npmjs.com/package/clue-hunt-ui"