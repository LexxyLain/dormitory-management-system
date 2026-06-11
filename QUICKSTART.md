# Quick Start Guide

Get the Dormitory Management System up and running in minutes!

## 📋 Prerequisites

- Node.js 18 or higher
- pnpm, npm, or yarn
- Git (for version control)

## 🚀 Local Setup (5 minutes)

### 1. Clone or Download the Project

```bash
# If cloning from GitHub
git clone https://github.com/LexxyLain/dormitory-management-system.git
cd dormitory-management-system

# Or if using v0 download, just extract the ZIP and navigate to the folder
cd dormitory-management-system
```

### 2. Install Dependencies

```bash
pnpm install
# or: npm install
# or: yarn install
```

### 3. Run Development Server

```bash
pnpm dev
# or: npm run dev
```

The app starts at **http://localhost:3000**

### 4. Open in Browser

Click the link above or visit `http://localhost:3000`

## 🔐 Login Credentials

### Admin Account
- **Email**: `admin@dorm.edu`
- **Password**: `password`

### Student Account
- **Email**: `student@dorm.edu`
- **Password**: `password`

## 🎯 What to Try First

### As an Admin:
1. Go to **Admin Dashboard**
2. View the overview (statistics and recent activities)
3. Click **Students** to see all residents
4. Check **Rooms** to view room assignments
5. Navigate to **Billing** to see payment tracking
6. Check **Maintenance** requests from students
7. View **Visitors** log for guest tracking

### As a Student:
1. Go to **Student Dashboard**
2. View your room information
3. Check your **Billing** section for outstanding dues
4. Submit a **Maintenance Request**
5. Register a **Visitor**

## 📁 Project Structure

```
dormitory-management-system/
├── app/                    # Next.js app directory
│   ├── login/             # Login page
│   ├── admin/             # Admin dashboard
│   └── student/           # Student dashboard
├── components/            # Reusable React components
│   ├── admin/            # Admin-specific components
│   └── student/          # Student-specific components
├── lib/                  # Utilities & helpers
│   └── auth-context.tsx  # Authentication logic
├── public/               # Static files
├── README.md            # Full documentation
├── DEPLOYMENT.md        # Deployment instructions
└── package.json         # Dependencies
```

## 🎨 Customization

### Change App Colors
Edit `/app/globals.css` - look for color variables in `:root` selector.

### Change App Title
Edit `/app/layout.tsx` - update the `metadata` object.

### Add New Features
1. Create components in `/components/`
2. Import them in relevant pages
3. Add navigation links in nav components

## 🌐 Deploy to Vercel

Ready to go live? Follow these steps:

### 1. Push to GitHub
```bash
git add .
git commit -m "Dormitory Management System"
git push origin main
```

### 2. Connect to Vercel
- Visit [vercel.com](https://vercel.com)
- Click "Add New" → "Project"
- Select your GitHub repository
- Click "Deploy"
- Done! Your app is live 🎉

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🔧 Common Tasks

### Restart Development Server
```bash
# Press Ctrl+C to stop
# Then run:
pnpm dev
```

### Build for Production
```bash
pnpm build
pnpm start
```

### Install New Package
```bash
pnpm add package-name
# or: npm install package-name
```

### Update All Dependencies
```bash
pnpm update
# or: npm update
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
pnpm dev -- -p 3001
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### App Not Compiling
1. Check for TypeScript errors: `pnpm tsc --noEmit`
2. Check console for detailed errors
3. Try clearing `.next` folder: `rm -rf .next`

### Login Not Working
- Clear browser cache/cookies
- Try in incognito window
- Ensure you're using correct credentials (see above)

## 📚 Learn More

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **React**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)

## 🤝 Need Help?

1. Check [README.md](README.md) for full documentation
2. Review [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
3. Check build logs for error details
4. Create an issue on GitHub

## 🎓 Next Steps

### Beginner Path
1. Explore the UI and all features
2. Customize colors and branding
3. Deploy to Vercel
4. Share with others

### Developer Path
1. Add a database (Supabase/Neon)
2. Implement real authentication
3. Add payment processing
4. Set up email notifications
5. Add more features

### Production Path
1. Database setup
2. Authentication hardening
3. SSL certificates
4. Monitoring & logging
5. Backup & disaster recovery

## ✨ What's Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Role-based access (Admin & Student)
- ✅ Dark/Light mode support
- ✅ Professional UI with shadcn components
- ✅ TypeScript for type safety
- ✅ Tailwind CSS styling
- ✅ Mock data for demo
- ✅ Ready for database integration

## 🚢 Ready to Deploy?

```bash
git add .
git commit -m "Ready for production"
git push origin main
# Then deploy on Vercel!
```

---

**Happy managing! 🎉**
