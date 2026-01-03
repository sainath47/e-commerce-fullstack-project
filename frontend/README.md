# Sainath Bazaar - React Application

A modern, responsive e-commerce frontend built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern React**: Built with React 18 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions
- **Component-Based**: Modular and reusable components
- **Fast Development**: Vite for lightning-fast development server

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- Vite
- Lucide React (icons)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProductGrid.tsx
│   ├── About.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   └── Home.tsx
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Components

- **Navbar**: Responsive navigation with mobile menu
- **Hero**: Landing section with call-to-action
- **ProductGrid**: Featured products showcase
- **About**: Company information and features
- **Footer**: Site links and contact information

## Customization

The application uses a dark theme with yellow accents. You can customize colors in:
- `tailwind.config.js` for theme colors
- `src/index.css` for global styles

## Development

The app is configured with:
- Hot module replacement for fast development
- TypeScript for type safety
- ESLint for code quality
- Path aliases (`@/` for `src/`)

## Deployment

Build the project with `npm run build` and deploy the `dist` folder to your hosting platform.