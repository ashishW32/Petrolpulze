# PetrolPulze Frontend

Premium desktop-first React + Vite + TypeScript + Tailwind CSS + Framer Motion webapp for smart highway fuel intelligence in India.

## Tech Stack
- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React

## Routes
- `/about`
- `/auth`
- `/map`
- `/find-fuel`
- `/station/:id`
- `/` redirects to `/about`

## Project Structure
- `src/components` reusable UI/layout/animation components
- `src/pages` route pages
- `src/data/stations.ts` mock JSON-like data for pumps, fuels, ratings, services, map markers support
- `src/types` shared TypeScript interfaces

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Build production bundle:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

No backend required.
