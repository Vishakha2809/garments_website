# Banke Bihari Garments Website

This is a modern, static frontend-only React website built for Banke Bihari Garments, a manufacturer and wholesaler based in Indore, MP.

## Tech Stack
- **Framework:** React 18 with Vite
- **Styling:** Plain CSS with design tokens
- **Routing:** Single-page scroll navigation

## Getting Started Locally

To run the project on your machine:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open the provided `http://localhost:5173` link in your browser.

## How to Edit Content

### 1. Business Details
To update phone numbers, address, or GSTIN, edit the `src/data/business.js` file.
The changes will automatically reflect across the Header, Footer, and Contact sections.

### 2. Categories
To add, remove, or modify product categories, edit the `src/data/categories.js` file.
- If you have real photos later, you can add an `image: "/path/to/image.jpg"` field to any category object.
- If no image is provided, the site will automatically use the CSS fabric pattern specified in the `pattern` field. Available patterns: `stripes`, `checks`, `dots`, `twill`, `plaid`, `solid`.

## Deployment

This site is a static site and can be deployed for free on platforms like Vercel or Netlify.

### Deploying to Vercel
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your GitHub repository.
4. Vercel will automatically detect that it's a Vite project. The default settings (Build Command: `npm run build`, Output Directory: `dist`) are correct.
5. Click "Deploy".

### Deploying to Netlify
1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/) and click "Add new site" -> "Import an existing project".
3. Select your GitHub repository.
4. Netlify should auto-detect the Vite settings (Build command: `npm run build`, Publish directory: `dist`).
5. Click "Deploy site".
