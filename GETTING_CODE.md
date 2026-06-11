# 📥 Getting Your Code Ready

Follow these steps to download the code and prepare it for GitHub.

---

## Option 1: Download from v0 (If Using v0)

### Step 1: Get the ZIP File
1. In v0 dashboard, click the **three dots** (⋯) in the top right
2. Select **"Download ZIP"**
3. Save the file to your computer

### Step 2: Extract the ZIP
- Windows: Right-click → "Extract All"
- Mac: Double-click the ZIP file
- Linux: `unzip dormitory-management-system.zip`

### Step 3: Open Terminal in Project Folder
- **Windows**: Open Command Prompt/PowerShell in project folder
- **Mac**: Open Terminal (or drag folder to Terminal icon)
- **Linux**: `cd` to project folder

### Step 4: Continue to "Setup Git" Section Below

---

## Option 2: Clone from GitHub (If Already on GitHub)

If you've already pushed the code to GitHub:

```bash
git clone https://github.com/LexxyLain/dormitory-management-system.git
cd dormitory-management-system
```

Skip to "Deploy to Vercel" section.

---

## 🔧 Setup Git (For Downloaded Code)

### 1. Install Git
- **Windows**: https://git-scm.com/download/win
- **Mac**: https://git-scm.com/download/mac
- **Linux**: `sudo apt-get install git`

Verify: `git --version`

### 2. Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Create GitHub Account (If Needed)
- Go to https://github.com/signup
- Create free account

### 4. Create New Repository on GitHub

**Method A: Using Website**
1. Go to https://github.com/new
2. Name: `dormitory-management-system`
3. Description: `A modern dormitory management system`
4. Choose Public or Private
5. **DO NOT** check "Initialize this repository with..."
6. Click "Create repository"

**Method B: Using GitHub CLI**
```bash
gh auth login
gh repo create dormitory-management-system --public --confirm
```

---

## 📤 Push Code to GitHub

### In Your Project Directory:

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Dormitory Management System v1.0"

# Add remote repository (replace LexxyLain)
git remote add origin https://github.com/LexxyLain/dormitory-management-system.git

# Change branch name to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Verify Success:
- Visit: `https://github.com/LexxyLain/dormitory-management-system`
- You should see all your files

---

## ✅ Verify Your Code is Ready

Run these commands to ensure everything is set up:

```bash
# Check git status
git status

# Should show: "On branch main" and "nothing to commit"

# Check remote
git remote -v

# Should show: "origin https://github.com/LexxyLain/..."

# Check file count
ls -la | wc -l

# Should show many files (components, pages, etc.)
```

---

## 🚀 Next: Deploy to Vercel

Once your code is on GitHub, deploy it:

1. Go to: https://vercel.com/new
2. Click: "Import Git Repository"
3. Select: `dormitory-management-system`
4. Click: "Deploy"
5. Wait for build (1-2 minutes)
6. Visit your live URL! 🎉

See [DEPLOY_TO_GITHUB_VERCEL.md](DEPLOY_TO_GITHUB_VERCEL.md) for detailed steps.

---

## 🔑 Generate SSH Key (Optional, Advanced)

For easier pushing without typing password each time:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Press Enter 3 times to use defaults

# Copy key (Mac/Linux)
cat ~/.ssh/id_ed25519.pub | pbcopy

# Copy key (Windows PowerShell)
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard

# Add to GitHub:
# 1. Go to https://github.com/settings/keys
# 2. Click "New SSH key"
# 3. Paste the key
# 4. Click "Add SSH key"

# Change remote to use SSH
git remote set-url origin git@github.com:LexxyLain/dormitory-management-system.git
```

---

## 📋 File Structure

After setup, your project should have:

```
dormitory-management-system/
├── app/                      # Next.js pages
├── components/               # React components
├── lib/                      # Utilities
├── public/                   # Static files
├── .git/                     # Git folder (created by git init)
├── .gitignore               # Files to ignore
├── README.md                # Main documentation
├── QUICKSTART.md            # Quick start guide
├── DEPLOYMENT.md            # Deployment guide
├── DEPLOY_TO_GITHUB_VERCEL.md # Step-by-step deploy
├── .env.example             # Example environment variables
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind config
├── next.config.mjs          # Next.js config
└── pnpm-lock.yaml           # Dependency lock file
```

---

## 🆘 Common Issues

### Git Command Not Found
- Install Git: https://git-scm.com/download
- Restart terminal after installing
- Run: `git --version` to verify

### "fatal: not a git repository"
- You're not in project folder
- Run: `cd dormitory-management-system` first
- Then: `git init`

### "fatal: origin already exists"
- Remote already set up
- Run: `git remote -v` to check
- If wrong: `git remote remove origin`
- Then add correct one: `git remote add origin ...`

### "Permission denied (publickey)"
- SSH key issue
- Use HTTPS URL instead: `https://github.com/...`
- Or set up SSH key (see above)

### "Everything up-to-date"
- Nothing to push
- Make changes, then: `git add . && git commit -m "message" && git push`

---

## 📚 Learning Resources

| Topic | Link |
|-------|------|
| Git Tutorial | https://git-scm.com/book/en/v2 |
| GitHub Guides | https://guides.github.com |
| GitHub Docs | https://docs.github.com |
| Vercel Docs | https://vercel.com/docs |
| Next.js Docs | https://nextjs.org/docs |

---

## ✨ Ready?

Once your code is pushed to GitHub, proceed to:

📖 [DEPLOY_TO_GITHUB_VERCEL.md](DEPLOY_TO_GITHUB_VERCEL.md)

For step-by-step Vercel deployment instructions.

---

## 🎉 You're All Set!

Your code is ready for deployment. Let's get it live! 🚀
