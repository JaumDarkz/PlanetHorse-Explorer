# Horse Explorer

> A modern web application for exploring, managing, and competing with horses in the Planet Horse crypto game ecosystem.

## Overview

Horse Explorer is a comprehensive secondary platform developed for [Planet Horse](https://planethorse.io), a blockchain-based horse racing game. This application provides players with advanced tools to explore horses, track leaderboards, and manage referrals - all wrapped in a sleek, performant interface built with the latest web technologies.

## Features

### Horse Explorer
- **Comprehensive Browse Experience**: Navigate through an extensive collection of horses with detailed profiles
- **Advanced Search**: Real-time search across multiple attributes (name, type, sex, jockey type, status)
- **Smart Filtering & Sorting**: Sort by level or rarity with instant visual feedback
- **Pagination**: Smooth navigation through large datasets with 10 items per page
- **Responsive Design**: Fully optimized for desktop and mobile devices

### Leaderboard System
- **Global Rankings**: Track top players across multiple metrics
- **Multi-criteria Sorting**: Sort by total points, level, races won, win rate, tokens earned, or horses owned
- **Advanced Filters**: Filter players by:
  - Experience level (Beginner, Intermediate, Expert)
  - Horse type preferences
  - Online status
  - Geographic region
- **Real-time Search**: Search by username, wallet address, or favorite horse name
- **Detailed Player Profiles**: View comprehensive statistics for each player

### Referral Program
- **Referral Link Generator**: Create custom referral links with unique codes
- **Real-time Statistics Dashboard**: Track:
  - Total referrals
  - Active referrals
  - Earnings (total and monthly)
  - Referral level progression
- **Milestone System**: Unlock rewards at specific referral thresholds
- **Bonus Tracking**: Monitor earning multipliers based on referral performance
- **One-click Sharing**: Copy referral links instantly

### Additional Features
- **Custom Cursor**: Themed cursor implementation for enhanced UX
- **Interactive Modals**: Confirmation dialogs, error handling, and reward notifications
- **Optimized Performance**: Client-side rendering with React 19's latest optimizations
- **Type Safety**: Full TypeScript implementation for robust code quality

## Tech Stack

### Core Technologies
- **[Next.js 15.3.3](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development
- **[SASS/SCSS](https://sass-lang.com/)** - Advanced styling with CSS modules

### Libraries & Tools
- **react-countup** - Smooth number animations for statistics
- **Turbopack** - Ultra-fast bundling in development mode
- **CSS Modules** - Scoped styling for component isolation

### Development Practices
- **Component-Driven Architecture**: Reusable, modular components
- **Custom Hooks**: Shared logic for race results and horse rendering
- **Domain-Driven Design**: Clear separation of models and business logic
- **Mock Data System**: Comprehensive testing with realistic mock data

## Project Structure

```
horse-explorer/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── (main)/              # Main explorer page
│   │   ├── leaderboard/         # Leaderboard page
│   │   └── referral/            # Referral program page
│   ├── components/              # Reusable UI components
│   │   ├── global/              # Shared components (Navbar, Pagination, etc.)
│   │   ├── referral/            # Referral-specific components
│   │   ├── LeaderboardTable/    # Table components
│   │   └── [other components]
│   ├── views/                   # Page-level view components
│   │   ├── ExplorerPage/
│   │   ├── LeaderboardPage/
│   │   ├── ReferralPage/
│   │   └── modals/              # Modal views
│   ├── domain/                  # Domain models
│   │   └── models/              # Horse, Item models
│   ├── utils/                   # Utilities and helpers
│   │   ├── constants/           # Game constants (items, XP, level-up fees)
│   │   ├── hooks/               # Custom React hooks
│   │   └── mocks/               # Mock data for development
│   ├── types/                   # TypeScript type definitions
│   └── styles/                  # Global styles
└── public/                      # Static assets
    ├── assets/                  # Game assets, icons, images
    └── cursor/                  # Custom cursor files
```

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/horse-explorer.git
cd horse-explorer
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Development Highlights

### Performance Optimizations
- **Client-side rendering** with React 19's automatic batching
- **Memoized computations** for filtering and sorting large datasets
- **Pagination** to handle extensive horse collections efficiently
- **SCSS modules** for optimized CSS delivery

### Code Quality
- **100% TypeScript** coverage for type safety
- **Modular component structure** for maintainability
- **Separation of concerns** between views, components, and business logic
- **Reusable hooks** for common functionality

### UX Enhancements
- **Real-time search** with instant feedback
- **Smooth animations** using react-countup
- **Custom cursor** for immersive gaming experience
- **Responsive design** across all screen sizes
- **Intuitive modal system** for user interactions

## Key Features Implementation

### Smart Filtering System
The explorer implements a sophisticated filtering mechanism that combines:
- Text search across multiple horse attributes
- Sorting by level (descending) or rarity (Legendary > Epic > Rare > Uncommon > Common)
- Automatic pagination reset on filter changes
- Memoized computations for optimal performance

### Leaderboard Rankings
Comprehensive player ranking system featuring:
- Six different sorting criteria
- Multi-dimensional filtering (level, horse type, status, region)
- Search across usernames, wallets, and horse names
- Visual indicators for player status (Online, Racing, Offline)

### Referral Tracking
Complete referral management system with:
- Dynamic referral code generation
- Progress tracking with milestone visualization
- Reward claiming interface
- Statistical dashboard with animated counters

## Future Enhancements

- [ ] Integration with blockchain wallet (MetaMask, WalletConnect)
- [ ] Real-time data synchronization with Planet Horse API
- [ ] Horse comparison tool
- [ ] Advanced statistics and analytics dashboard
- [ ] Dark mode support
- [ ] Internationalization (i18n)
- [ ] Race history and replay functionality
- [ ] Social sharing features

## Screenshots

> Add screenshots of your application here to showcase the UI

## About Planet Horse

Planet Horse is a blockchain-based horse racing game where players can own, breed, and race NFT horses. This Explorer application serves as a companion tool to enhance the gaming experience by providing advanced browsing, competitive rankings, and community growth features.

## License

This project is a project for the Planet Horse ecosystem.

---

Built with by João Vinicius | Powered by Next.js 15 & React 19
