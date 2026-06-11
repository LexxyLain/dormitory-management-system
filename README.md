# Dormitory Management System

A modern, full-featured dormitory management system built with Next.js, React, and TypeScript. Designed to streamline student residence management with separate admin and student portals.

## Features

### Admin Dashboard
- **Student Management**: Add, edit, and manage student records
- **Room Management**: Track room occupancy and manage assignments
- **Billing System**: Monitor payments and outstanding dues
- **Maintenance Tracking**: Handle and track maintenance requests
- **Visitor Management**: Log and monitor visitor check-ins/check-outs
- **Dashboard Overview**: Quick statistics and activity logs

### Student Portal
- **Personal Dashboard**: View room info and quick stats
- **Billing Portal**: View bills, payment history, and outstanding dues
- **Maintenance Requests**: Submit and track maintenance issues
- **Visitor Registration**: Register visitors and track guest visits

## Tech Stack

- **Frontend**: Next.js 16, React 19.2, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Icons**: Lucide React
- **State Management**: React Context API
- **Authentication**: Session-based with role-based access control

## Getting Started

### Prerequisites
- Node.js 18+ and pnpm (or npm/yarn)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/dormitory-management-system.git
cd dormitory-management-system
```

2. Install dependencies
```bash
pnpm install
```

3. Run the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Demo Credentials

The system uses mock data. Log in with these demo credentials:

**Admin Account**
- Email: `admin@dorm.edu`
- Password: `password`
- Role: Administrator

**Student Account**
- Email: `student@dorm.edu`
- Password: `password`
- Role: Student

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with auth provider
│   ├── page.tsx             # Home page (redirects to login)
│   ├── login/
│   │   └── page.tsx         # Login page
│   ├── admin/
│   │   └── page.tsx         # Admin dashboard
│   └── student/
│       └── page.tsx         # Student dashboard
├── components/
│   ├── admin/               # Admin-specific components
│   │   ├── dashboard-overview.tsx
│   │   ├── student-management.tsx
│   │   ├── room-management.tsx
│   │   ├── billing-management.tsx
│   │   ├── maintenance-tracking.tsx
│   │   └── visitor-management.tsx
│   ├── student/             # Student-specific components
│   │   ├── student-dashboard.tsx
│   │   ├── student-billing.tsx
│   │   ├── maintenance-requests.tsx
│   │   └── visitor-registration.tsx
│   ├── admin-nav.tsx        # Admin navigation
│   ├── student-nav.tsx      # Student navigation
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── auth-context.tsx     # Authentication context
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
└── package.json
```

## Data Management

Currently, the system uses in-memory mock data for demonstration. To persist data in a production environment, you can integrate with:

- **Supabase**: PostgreSQL database with built-in auth
- **Neon**: Serverless PostgreSQL with Vercel integration
- **MongoDB**: NoSQL database
- **Firebase**: Real-time database

See the [Database Integration](#database-integration) section below.

## Deployment

### Deploy to Vercel

1. **Push to GitHub** (if not already done)
```bash
git add .
git commit -m "Initial commit: Dormitory Management System"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New..." → "Project"
   - Select your `dormitory-management-system` repository
   - Vercel will automatically detect Next.js configuration
   - Click "Deploy"

3. **Your app is live!**
   - Vercel will provide you with a live URL
   - Every push to your `main` branch triggers an automatic deployment

## Environment Variables

For production use with a database, add these to your Vercel project settings:

```env
# Database (if using Supabase, Neon, etc.)
DATABASE_URL=your_database_url
DATABASE_SECRET=your_database_secret

# Authentication secrets
AUTH_SECRET=your_auth_secret
```

**For the demo**: No environment variables are required. The system works with mock data.

## Database Integration

To add persistent data storage:

### Option 1: Supabase (Recommended)
```bash
pnpm add @supabase/supabase-js
```
Then update the components to fetch from Supabase API endpoints.

### Option 2: Neon + Drizzle ORM
```bash
pnpm add drizzle-orm pg
```

### Option 3: Firebase
```bash
pnpm add firebase
```

See the respective service documentation for integration details.

## Authentication Enhancement

The current system uses client-side session management. For production, consider:

1. **Better Auth**: Secure session management with Neon
2. **NextAuth.js**: OAuth and credential-based authentication
3. **Supabase Auth**: Built-in authentication with database

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Static Generation**: Pages are pre-rendered where possible
- **Dynamic Rendering**: User-specific pages render dynamically
- **Image Optimization**: Automatic image optimization via Next.js
- **CSS**: Tailwind CSS with purging for minimal bundle size

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] Database integration (Supabase/Neon)
- [ ] Real authentication with password hashing
- [ ] Payment gateway integration (Stripe)
- [ ] Email notifications
- [ ] Advanced analytics and reporting
- [ ] Mobile app (React Native)
- [ ] Dark mode enhancement
- [ ] Multi-language support
- [ ] Automated backup system
- [ ] Two-factor authentication

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions, please:
1. Check existing GitHub issues
2. Create a new issue with detailed information
3. Include screenshots or error messages when relevant

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ for dormitory management.**
