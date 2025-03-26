# Riguelni Documentation Platform

A modern documentation platform built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
├── app/
│   ├── (marketing)/     # Marketing pages
│   ├── (docs)/         # Documentation pages
│   ├── api/            # API routes
│   └── layout.tsx      # Root layout
├── components/
│   ├── layout/         # Layout components (navbar, footer)
│   ├── shared/         # Shared components
│   └── ui/             # UI components
├── lib/
│   ├── config/         # Configuration files
│   ├── types/          # TypeScript types
│   └── utils/          # Utility functions
└── styles/
    ├── themes/         # Theme configurations
    └── animations/     # Animation styles
```

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Modern UI with Tailwind CSS
- Dark mode support
- Responsive design
- TypeScript support
- Next.js 14 with App Router
- Framer Motion animations

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint 