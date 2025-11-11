# Clue Hunt UI

A modern React component library for building interactive clue hunt and puzzle applications with a space/galaxy theme.

## 📦 Installation

```bash
npm install clue-hunt-ui
# or
yarn add clue-hunt-ui
```

## 🚀 Usage

```tsx
import { Title, Button, Container } from "clue-hunt-ui";

function App() {
  return (
    <Container theme="dark">
      <Title
        label="Welcome to Clue Hunt"
        titleSize="xl"
        animated={true}
        gradient={true}
        align="center"
      />
      <Button
        label="Start Adventure"
        size="large"
        mode="pulse"
        primary={true}
      />
    </Container>
  );
}
```

## 🧩 Available Components

- **Title**: Customizable headings with animations and gradients
- **Button**: Interactive buttons with multiple styles and effects
- **Container**: Layout wrapper with galaxy background
- **SkipButton**: Skip functionality with disabled states
- **DarkModeButton**: Theme switching component
- **GalaxyBackground**: Animated space-themed background
- **And many more...**

## 📚 Development

### Prerequisites

- Node.js 18+
- yarn (recommended) or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/sale4319/clue-hunt-ui.git
cd clue-hunt-ui

# Install dependencies
yarn install

# Start development server
yarn dev

# Build the library
yarn build

# Run linting
yarn lint
```

## 🚀 Publishing Guide

This project includes multiple automated publishing workflows to streamline releases.

### Prerequisites for Publishing

1. **NPM Authentication**

   ```bash
   npm login
   npm whoami  # Verify you're logged in
   ```

2. **Git Setup**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

### 🎯 Publishing Methods

#### Method 1: Interactive Release Script (Recommended for Solo Development)

```bash
yarn release:interactive
```

This script will:

- ✅ Check git status (working directory must be clean)
- ✅ Pull latest changes
- ✅ Run linting and build
- ✅ Prompt for version type (patch/minor/major/beta/alpha)
- ✅ Update package.json version
- ✅ Create git commit and tag
- ✅ Push to GitHub
- ✅ Publish to npm

#### Method 2: Standard-Version (Automated from Commit Messages)

Uses conventional commit messages to automatically determine version bumps:

```bash
# Automatically detect version from commits
yarn release

# Force specific version types
yarn release:patch    # 0.4.9 → 0.4.10
yarn release:minor    # 0.4.9 → 0.5.0
yarn release:major    # 0.4.9 → 1.0.0
yarn release:beta     # 0.4.9 → 0.4.10-beta.0
yarn release:alpha    # 0.4.9 → 0.4.10-alpha.0

# Then publish
yarn publish
```

**Conventional Commit Examples:**

```bash
git commit -m "feat: add new Title component animations"     # → minor bump
git commit -m "fix: resolve SkipButton disabled styling"    # → patch bump
git commit -m "feat!: breaking change in Button API"       # → major bump
```

#### Method 3: Manual Yarn Version Commands

```bash
# Update version and auto-publish
yarn version --patch   # 0.4.9 → 0.4.10
yarn version --minor   # 0.4.9 → 0.5.0
yarn version --major   # 0.4.9 → 1.0.0

# For pre-releases
yarn version --prerelease --preid=beta   # 0.4.9 → 0.4.10-beta.0
yarn version --prerelease --preid=alpha  # 0.4.9 → 0.4.10-alpha.0
```

#### Method 4: GitHub Actions (Automated CI/CD)

Automatic publishing on push to main branch:

1. **Setup NPM Token in GitHub Secrets:**

   - Go to: Repository → Settings → Secrets and variables → Actions
   - Add secret: `NPM_TOKEN` with your npm access token

2. **Push to main branch:**

   ```bash
   git push origin main
   ```

3. **GitHub Actions will automatically:**
   - ✅ Run tests and linting
   - ✅ Build the project
   - ✅ Create new version using standard-version
   - ✅ Publish to npm
   - ✅ Create GitHub release

### 📋 Pre-Publish Checklist

Before publishing, ensure:

- [ ] All tests pass: `yarn lint`
- [ ] Build is successful: `yarn build`
- [ ] Working directory is clean: `git status`
- [ ] You're on main/master branch
- [ ] All changes are committed and pushed

### 🔄 Version Strategy

We follow [Semantic Versioning (SemVer)](https://semver.org/):

- **Patch** (0.4.9 → 0.4.10): Bug fixes, minor improvements
- **Minor** (0.4.9 → 0.5.0): New features, component additions
- **Major** (0.4.9 → 1.0.0): Breaking changes, API modifications

### 📝 Changelog

Changelog is automatically generated using [standard-version](https://github.com/conventional-changelog/standard-version) based on conventional commit messages.

### 🎉 Quick Start for Contributors

1. **Make your changes**
2. **Commit using conventional format:**
   ```bash
   git commit -m "feat: add awesome new component"
   ```
3. **Run interactive release:**
   ```bash
   yarn release:interactive
   ```

### 🔗 Useful Links

- [NPM Package](https://www.npmjs.com/package/clue-hunt-ui)
- [GitHub Repository](https://github.com/sale4319/clue-hunt-ui)
- [Conventional Commits](https://conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

### 🆘 Troubleshooting

**"Working directory not clean" error:**

```bash
git status          # Check what files are modified
git add .           # Stage all changes
git commit -m "..."  # Commit changes
```

**NPM authentication error:**

```bash
npm logout
npm login
npm whoami          # Verify login
```

**Build fails:**

```bash
rm -rf node_modules dist
yarn install
yarn build
```
