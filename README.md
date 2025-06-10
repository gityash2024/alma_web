# Almawakening Website

This is the official website for Almawakening, a non-profit organization focused on bringing positive change through awareness and community action.

## Tech Stack

- React 19
- TypeScript
- React Router for navigation
- SCSS for styling
- React Helmet Async for SEO optimization
- Framer Motion for animations (to be implemented)

## Project Structure

```
alma_website/
├── public/            # Static files
├── src/
│   ├── assets/        # Images, icons, and other assets
│   ├── components/    # Reusable components
│   │   ├── common/    # Shared components
│   │   ├── layout/    # Layout components (Navbar, Footer)
│   │   ├── home/      # Home page components
│   │   ├── about/     # About page components
│   │   └── ...        # Other page-specific components
│   ├── context/       # React context providers
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── services/      # API services and utilities
│   ├── styles/        # Global styles and variables
│   ├── types/         # TypeScript type definitions
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main App component
│   └── index.tsx      # Application entry point
└── package.json       # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/alma_website.git
cd alma_website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm start`: Run the app in development mode
- `npm test`: Launch the test runner
- `npm run build`: Build the app for production
- `npm run eject`: Eject from Create React App (one-way operation)

## SEO Optimization

The website is optimized for search engines with:
- React Helmet for managing document head
- Semantic HTML5 markup
- Responsive design for all device sizes
- Meta tags for social sharing
- Canonical URLs
- Sitemap (to be generated during build)

## Deployment

Build the production version:
```bash
npm run build
```

The build output will be in the `build` folder, ready to be deployed to any static hosting service.

## License

This project is proprietary and not open for redistribution or use without explicit permission.

## Contact

For any inquiries, please contact [contact@almawakening.org](mailto:contact@almawakening.org).
# almawakening_website
# alma_web
