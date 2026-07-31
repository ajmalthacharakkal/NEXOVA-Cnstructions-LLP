# NEXOVA Constructions LLP Website

A modern, premium website for NEXOVA Constructions LLP built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, corporate design with blue, black, and white branding
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML
- **Commercial Focus**: Specialized content for commercial and industrial construction

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready motion library for React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd nexova-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nexova-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Responsive navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services section
│   ├── Contact.tsx         # Contact section with form
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Customization

### Brand Colors

The brand colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  nexova: {
    blue: "#0047AB",    // Primary brand color
    dark: "#0A0A0A",    // Dark backgrounds
    light: "#FFFFFF",   // Light backgrounds
    gray: "#F5F5F5"     // Gray backgrounds
  }
}
```

### Contact Information

Update contact details in:
- `components/Contact.tsx` - Contact section information
- `components/Footer.tsx` - Footer contact information

## Sections

1. **Navbar**: Responsive navigation with smooth scrolling
2. **Hero**: Impactful hero section with animated background
3. **About**: Company overview with statistics
4. **Services**: Commercial and industrial construction services
5. **Contact**: Contact form and information
6. **Footer**: Company links and contact details

## License

© 2024 NEXOVA Constructions LLP. All rights reserved.
