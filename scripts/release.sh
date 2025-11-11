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
        RELEASE_TYPE="--release-as patch"
        ;;
    2)
        RELEASE_TYPE="--release-as minor"
        ;;
    3)
        RELEASE_TYPE="--release-as major"
        ;;
    4)
        RELEASE_TYPE="--prerelease beta"
        ;;
    5)
        RELEASE_TYPE="--prerelease alpha"
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

# Create new version using standard-version
echo "📝 Creating new version..."
yarn standard-version $RELEASE_TYPE

# Get the new version
NEW_VERSION=$(node -p "require('./package.json').version")

# Push changes
echo "⬆️  Pushing changes..."
git push --follow-tags origin $CURRENT_BRANCH

# Publish to npm
echo "📦 Publishing to npm..."
yarn npm publish --access public

echo "✅ Successfully released version $NEW_VERSION!"
echo "🔗 Check it out: https://www.npmjs.com/package/clue-hunt-ui"