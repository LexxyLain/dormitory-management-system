# 📋 Command Reference

All the commands you need in one place.

---

## 🌳 Git Commands

### Initial Setup
```bash
# Initialize repository
git init

# Configure user
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Check config
git config --list
```

### Daily Workflow
```bash
# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline
```

### Repository Setup
```bash
# Add remote (replace URL)
git remote add origin https://github.com/USERNAME/dormitory-management-system.git

# Check remote
git remote -v

# Change remote
git remote set-url origin https://github.com/USERNAME/new-repo.git

# Remove remote
git remote remove origin

# Rename branch
git branch -M main
```

### Branches
```bash
# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# List branches
git branch -a

# Delete branch
git branch -d feature/old-feature

# Merge branch
git merge feature/new-feature
```

---

## 💾 npm/pnpm Commands

### Installation
```bash
# Install dependencies
pnpm install
npm install
yarn install

# Install specific package
pnpm add package-name
npm install package-name

# Install dev dependency
pnpm add -D package-name
npm install --save-dev package-name
```

### Development
```bash
# Start dev server
pnpm dev
npm run dev

# Build for production
pnpm build
npm run build

# Start production server
pnpm start
npm start

# Run TypeScript check
pnpm tsc --noEmit
npx tsc --noEmit

# Format code
pnpm format
npm run format

# Lint code
pnpm lint
npm run lint
```

### Maintenance
```bash
# Update all packages
pnpm update
npm update

# Check outdated packages
pnpm outdated
npm outdated

# Clean cache
pnpm store prune
npm cache clean --force

# Remove node_modules
rm -rf node_modules

# Reinstall everything
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## 🚀 Deployment Commands

### Deploy to Vercel (CLI)
```bash
# Install Vercel CLI
pnpm add -g vercel
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod

# Check deployments
vercel list

# View logs
vercel logs
```

### GitHub Commands
```bash
# Clone repository
git clone https://github.com/username/dormitory-management-system.git

# Initialize new repo
git init

# Push to GitHub
git add .
git commit -m "message"
git push origin main

# Create GitHub repository
gh repo create dormitory-management-system --public --source=. --push
```

---

## 🔧 Development Tools

### TypeScript
```bash
# Check for type errors
pnpm tsc --noEmit
npx tsc --noEmit

# Generate types
pnpm tsc
npx tsc

# Watch mode
pnpm tsc --watch
npx tsc --watch
```

### shadcn/ui
```bash
# Add components
pnpm dlx shadcn@latest add button card input

# Check installed components
pnpm dlx shadcn@latest info

# Search components
pnpm dlx shadcn@latest search button

# View component docs
pnpm dlx shadcn@latest docs button

# Update component
pnpm dlx shadcn@latest add button --overwrite
```

### Tailwind CSS
```bash
# Build CSS
pnpm tailwindcss -i ./app/globals.css -o ./app/output.css

# Watch CSS
pnpm tailwindcss -i ./app/globals.css -o ./app/output.css --watch

# Purge unused CSS
pnpm tailwindcss -i ./app/globals.css -o ./app/output.css --minify
```

---

## 🧪 Testing & Debugging

### Debugging
```bash
# Run with debug output
DEBUG=* pnpm dev

# Open DevTools
# Press Ctrl+Shift+I (or Cmd+Option+I on Mac)

# Check console logs
# Look in browser console (F12)
```

### Testing Port
```bash
# Check what's using port 3000
lsof -i :3000  # Mac/Linux
netstat -ano | findstr :3000  # Windows

# Use different port
pnpm dev -- -p 3001

# Kill process on port
kill -9 <PID>  # Mac/Linux
taskkill /PID <PID> /F  # Windows
```

---

## 📦 File Operations

### Navigation
```bash
# Change directory
cd folder-name

# List files
ls              # Mac/Linux
dir             # Windows

# List with details
ls -la          # Mac/Linux
dir /B          # Windows

# Print current directory
pwd             # Mac/Linux
cd              # Windows

# Go to home directory
cd ~
```

### File Management
```bash
# Create file
touch filename.txt          # Mac/Linux
echo "" > filename.txt      # Windows

# Create directory
mkdir folder-name

# Copy file
cp source.txt destination.txt       # Mac/Linux
copy source.txt destination.txt     # Windows

# Move file
mv source.txt destination/          # Mac/Linux
move source.txt destination\        # Windows

# Remove file
rm filename.txt             # Mac/Linux
del filename.txt            # Windows

# Remove directory
rm -rf folder-name          # Mac/Linux
rmdir /s folder-name        # Windows

# Show file contents
cat filename.txt            # Mac/Linux
type filename.txt           # Windows

# Count lines
wc -l filename.txt          # Mac/Linux
```

---

## 🌐 GitHub CLI Commands

### Setup
```bash
# Install GitHub CLI
# https://cli.github.com/

# Login
gh auth login

# Check status
gh auth status
```

### Repository
```bash
# Create repo
gh repo create dormitory-management-system --public

# Clone repo
gh repo clone username/dormitory-management-system

# View repo
gh repo view

# List repos
gh repo list
```

### Issues
```bash
# Create issue
gh issue create --title "Bug title" --body "Bug description"

# List issues
gh issue list

# View issue
gh issue view <number>
```

### Pull Requests
```bash
# Create PR
gh pr create --title "PR title" --body "PR description"

# List PRs
gh pr list

# View PR
gh pr view <number>

# Merge PR
gh pr merge <number>
```

---

## 📱 Environment Variables

### Set Variables
```bash
# Create .env.local file
touch .env.local

# Add to file (see .env.example for reference)
DATABASE_URL=postgresql://...
AUTH_SECRET=your_secret
```

### Use in Code
```typescript
// Server-side only
const dbUrl = process.env.DATABASE_URL;

// Client-side (must start with NEXT_PUBLIC_)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## 🔑 SSH Keys (Advanced)

### Generate SSH Key
```bash
# Generate
ssh-keygen -t ed25519 -C "your.email@example.com"

# Press Enter 3 times to use defaults

# View key
cat ~/.ssh/id_ed25519.pub

# Copy key (Mac)
cat ~/.ssh/id_ed25519.pub | pbcopy

# Copy key (Linux)
cat ~/.ssh/id_ed25519.pub | xclip -selection clipboard

# Copy key (Windows PowerShell)
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
```

### Use SSH with Git
```bash
# Test connection
ssh -T git@github.com

# Change remote to SSH
git remote set-url origin git@github.com:username/repo.git
```

---

## 🆘 Troubleshooting Commands

### Check System
```bash
# Node version
node --version

# npm version
npm --version

# Git version
git --version

# Check if port is in use
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Mac/Linux
```

### Common Fixes
```bash
# Clear npm cache
npm cache clean --force

# Clear pnpm cache
pnpm store prune

# Reinstall dependencies
rm -rf node_modules
rm pnpm-lock.yaml  (or package-lock.json)
pnpm install

# Clear Next.js cache
rm -rf .next

# Force rebuild
pnpm build --no-cache
```

### View Logs
```bash
# View git log
git log
git log --oneline

# View npm logs
npm logs

# View build output
cat .next/telemetry.json

# View Vercel logs
vercel logs
```

---

## 📊 Quick Cheat Sheet

| Task | Command |
|------|---------|
| Start dev server | `pnpm dev` |
| Build app | `pnpm build` |
| Deploy | `git push origin main` (then Vercel auto-deploys) |
| Add dependency | `pnpm add package-name` |
| Check status | `git status` |
| Commit changes | `git commit -m "message"` |
| Push to GitHub | `git push origin main` |
| Pull updates | `git pull origin main` |
| View logs | `git log --oneline` |
| Create branch | `git checkout -b feature/name` |
| Switch branch | `git checkout main` |
| Merge branch | `git merge feature/name` |

---

## 📚 More Help

- **Git Docs**: https://git-scm.com/doc
- **GitHub Docs**: https://docs.github.com
- **npm Docs**: https://docs.npmjs.com
- **pnpm Docs**: https://pnpm.io/
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs

---

**Save this file for quick reference!** 📌
