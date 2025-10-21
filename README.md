# Harmonica Helper

Interactive harmonica scale degree visualizer built with React, TypeScript, and Tailwind CSS.

## Features

- Interactive harmonica layout with all 10 holes
- Scale degree visualization when selecting a root note
- Responsive design that works on all screen sizes
- PWA support for offline use
- Color-coded note highlighting
- Mobile-optimized interface

## Development

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

### Code Quality

```bash
# Run linting
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Type checking
yarn type-check
```

### Other Commands

```bash
# Clean build artifacts and dependencies
yarn clean

# Reinstall dependencies
yarn install-deps
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # App title and instructions
│   ├── DegreeSelector.tsx   # Scale degree buttons
│   ├── Harmonica.tsx        # Main harmonica layout
│   ├── HarmonicaRow.tsx     # Individual harmonica rows
│   ├── HarmonicaNote.tsx    # Individual note components
│   └── InstallPrompt.tsx    # PWA install functionality
├── App.tsx                  # Main app component
├── main.tsx                 # React entry point
└── index.css                # Global styles with Tailwind
```

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Responsive Design

The app uses viewport width (VW) units for responsive scaling:
- Notes scale from 32px to 64px based on screen size
- Font sizes use `clamp()` for fluid typography
- Mobile screens hide labels to maximize space
- Full-screen layout on small devices

## PWA Features

- Service worker for offline functionality
- Install prompt for native app experience
- Manifest file for app metadata
- Cached resources for offline use
