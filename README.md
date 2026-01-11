# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, minimal, modern design
- 📱 Fully responsive (mobile-first)
- ⚡ Fast performance with Next.js
- 🎯 Smooth scroll navigation
- 👁️ Interactive hover effects
- 🔄 Scroll spy for active navigation
- ✨ Subtle animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Your Information

Edit the `/data/profile.ts` file to update your personal information:

- **personalInfo**: Your name, role, description, location, resume URL
- **socialLinks**: GitHub, LinkedIn, email addresses
- **skills**: Technical skills organized by category
- **education**: Educational background
- **experience**: Work experience history
- **projects**: Portfolio projects
- **certifications**: Professional certifications

### Adding Images/Logos

Place your images in the `/public` folder and reference them in the data file:

```typescript
logo: "/your-logo.png"
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/
│   ├── Navbar.tsx      # Navigation with scroll spy
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills grid
│   ├── Education.tsx   # Education cards
│   ├── Experience.tsx  # Experience timeline
│   ├── Projects.tsx    # Project cards
│   ├── Certifications.tsx  # Certification cards
│   ├── Contact.tsx     # Contact section
│   └── HoverHighlight.tsx  # Global hover effects
├── data/
│   └── profile.ts      # All content data
└── public/             # Static assets
```

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons

## License

MIT License - feel free to use this for your own portfolio!
