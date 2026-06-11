# Deployment Guide

This guide walks you through deploying the Dormitory Management System to GitHub and Vercel.

## Step 1: Prepare Your GitHub Repository

### 1.1 Create a New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name it `dormitory-management-system` (or your preferred name)
3. Add a description: "A modern dormitory management system with admin and student portals"
4. Choose **Public** if you want others to see it, or **Private** for your own use
5. Do NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 1.2 Initialize Git and Push Code

In your project directory (or v0 download), run:

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Dormitory Management System v1.0"

# Add remote repository
git remote add origin https://github.com/LexxyLain/dormitory-management-system.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `LexxyLain` with your actual GitHub username.**

### Verification
- Visit your repository URL: `https://github.com/LexxyLain/dormitory-management-system`
- You should see all your files listed

---

## Step 2: Deploy to Vercel

### 2.1 Sign In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (if new) or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### 2.2 Deploy the Project

1. After signing in, click "Add New" → "Project"
2. Click "Import Git Repository"
3. Paste your repository URL or select from the list: `dormitory-management-system`
4. Click "Import"

### 2.3 Configure Project Settings

The settings page shows:

- **Project Name**: `dormitory-management-system` (auto-filled)
- **Framework Preset**: `Next.js` (auto-detected)
- **Root Directory**: `./` (correct)
- **Environment Variables**: Leave empty for now (demo uses mock data)
- **Build Command**: `pnpm build` or `npm run build` (auto-configured)

**For production with database**, add environment variables here before deploying.

### 2.4 Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. You'll see a "Congratulations!" message with your live URL

**Your app is now live!** 🎉

Example URL: `https://dormitory-management-system.vercel.app`

---

## Step 3: Verify Your Deployment

1. Click "Visit" to open your live app
2. Test with demo credentials:
   - Admin: `admin@dorm.edu` / `password`
   - Student: `student@dorm.edu` / `password`
3. Verify all features work (navigation, data display, forms)

---

## Step 4: Set Up Automatic Deployments

Every time you push to GitHub, Vercel automatically redeploys your app.

```bash
# Make a change and push
git add .
git commit -m "Update feature X"
git push origin main

# Vercel automatically builds and deploys!
```

Monitor deployments at `https://vercel.com/dashboard`

---

## Step 5 (Optional): Add a Custom Domain

### Connect Your Domain

1. In Vercel Dashboard, select your project
2. Go to "Settings" → "Domains"
3. Enter your custom domain (e.g., `dorm.yourdomain.com`)
4. Follow Vercel's DNS instructions to point your domain

Your app is now accessible at your custom domain!

---

## Environment Variables (For Production)

If you add a database or third-party services, configure them here:

### In Vercel Dashboard:

1. Select your project
2. Go to "Settings" → "Environment Variables"
3. Add variables for Production, Preview, and Development:

```env
DATABASE_URL=postgresql://user:password@host:port/dbname
DATABASE_SECRET=your_secret_key
AUTH_SECRET=your_auth_secret
```

### In Your Code:

```typescript
const dbUrl = process.env.DATABASE_URL;
const secret = process.env.AUTH_SECRET;
```

---

## Troubleshooting

### Build Fails
**Error**: `Module not found`
- Run `pnpm install` locally and commit `pnpm-lock.yaml`
- Push to GitHub and redeploy

### App Works Locally but Not on Vercel
- Check Vercel build logs: Dashboard → Project → "Deployments"
- Look for error messages
- Ensure all environment variables are set correctly

### Data Disappears After Refresh
This is expected for the demo (in-memory storage). Add a database for persistence.

### Custom Domain Not Working
- Wait up to 48 hours for DNS propagation
- Verify DNS records in your domain registrar
- Check Vercel's DNS settings match your domain registrar

---

## Next Steps

### 1. Add a Database

To persist data permanently, integrate a database:

**Option A: Supabase (PostgreSQL)**
```bash
pnpm add @supabase/supabase-js
```

**Option B: Neon (Serverless PostgreSQL)**
```bash
pnpm add @neondatabase/serverless
```

**Option C: MongoDB**
```bash
pnpm add mongodb
```

### 2. Add Real Authentication

Replace the demo login with secure authentication:

```bash
pnpm add next-auth bcryptjs
```

### 3. Add Email Notifications

```bash
pnpm add resend nodemailer
```

### 4. Add Payment Processing (Optional)

```bash
pnpm add stripe @stripe/stripe-js
```

---

## Monitoring & Analytics

### Vercel Analytics

1. Select your project in Vercel
2. Go to "Analytics"
3. View:
   - Page performance (Core Web Vitals)
   - Error logs
   - Request statistics
   - Build history

### Error Tracking

Set up error monitoring for production:

```bash
pnpm add @sentry/nextjs
```

---

## Common Commands

```bash
# View deployments
vercel list

# View deployment logs
vercel logs [project-url]

# Promote a preview to production
vercel promote [deployment-url]

# View project info
vercel projects list

# Set environment variables
vercel env add DATABASE_URL
```

---

## Security Checklist

Before going live:

- [ ] Remove all demo/test data
- [ ] Set strong `AUTH_SECRET` environment variable
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Add environment variables for sensitive data
- [ ] Review `.gitignore` (no secrets in repo)
- [ ] Enable "Protected Branches" on GitHub
- [ ] Consider adding 2FA to GitHub and Vercel accounts
- [ ] Review data privacy policies
- [ ] Add proper error logging

---

## Support

Need help?

1. **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
2. **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
3. **GitHub Issues**: Create an issue in your repository
4. **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

**Your app is now deployed! 🚀**
