# 3D Mock App

A React + Vite application that renders interactive 3D experiences with Three.js, with optional user authentication powered by Clerk.

## Tech stack

- React 19
- Vite 6
- Three.js
- Clerk (React SDK)
- ESLint

## Prerequisites

- Node.js >= 18
- npm (or another Node package manager)

## Getting started

1) Install dependencies
```bash
npm install
```

2) Configure environment variables

Create a .env file in the project root with your required variables (example for Clerk):
```bash
# Frontend key (safe to expose in the browser)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Notes:
- Do not commit real secrets to version control.
- Production deployments should set these as environment variables in your hosting platform.

3) Run the development server
```bash
npm run dev
```

Vite will print a local URL. Open it in your browser to see the app.

## Scripts

- Start dev server with HMR:
```bash
npm run dev
```

- Build for production:
```bash
npm run build
```

- Preview the production build locally:
```bash
npm run preview
```

- Lint the codebase:
```bash
npm run lint
```

## Project structure

```
.
├── index.html
├── package.json
├── public/            # Static assets
├── src/               # Application source (React + Three.js)
├── vite.config.js     # Vite configuration
├── eslint.config.js   # ESLint configuration
└── .env               # Environment variables (do not commit secrets)
```

## Configuration

- Three.js: All 3D scene logic and assets typically live under src/.
- Clerk: Wrap your app with ClerkProvider and use components/hooks from @clerk/clerk-react.

## Deployment

- Build the app using npm run build.
- Serve the dist/ directory with any static host (or your platform’s adapter).
- Ensure required environment variables (like VITE_CLERK_PUBLISHABLE_KEY) are configured in your hosting environment.

## Contributing

1) Create a new branch for your change.
2) Make updates and ensure lint passes (npm run lint).
3) Open a pull request describing your changes.

## License

No license has been declared for this repository. Consider adding a LICENSE file to define how others can use this project.

## Acknowledgements

- React and Vite team for the development tooling.
- Three.js for the 3D rendering engine.
- Clerk for authentication tooling.
