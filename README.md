# Trosten Dsouza Portfolio

## Overview

This portfolio is a modern, responsive React application built with Vite. It showcases a personal portfolio website for Trosten Dsouza, highlighting an interactive hero section, project gallery, about section, and a contact form with Web3Forms integration.

## Key Features

- React 19 + Vite for a fast development and build experience
- Responsive layout with mobile navigation and drawer menu
- Custom 3D animated sphere using `@react-three/fiber` and `@react-three/drei`
- Project showcase cards with links to GitHub repositories
- Contact form powered by Web3Forms for secure form submission
- Clean component structure with dedicated styling files

## Tech Stack

- React
- Vite
- JavaScript
- Three.js / `@react-three/fiber`
- `@react-three/drei`
- Web3Forms
- ESLint

## Project Structure

- `src/App.jsx` — main page layout and section anchors
- `src/components/` — page sections: `Navbar`, `Hero`, `About`, `Projects`, `Contact`
- `src/assets/` — project screenshots and image assets
- `src/styling/` — component-specific CSS files
- `src/index.css` — base global styles
- `src/main.jsx` — React app entry point

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Open the URL shown in the terminal to preview the portfolio locally.

## Build

```bash
npm run build
```

Optionally preview the production build with:

```bash
npm run preview
```

## Environment Variables

This project uses a Web3Forms API access key for the contact form.

Create a `.env` file in the project root with:

```env
VITE_WEB_FORM_ACESS_KEY=your_web3forms_access_key
```

Then restart the Vite server.

## Contact

- Email: `trostendsouza@gmail.com`
- Location: Panaji, Goa, India

## Notes

This portfolio is intended to present professional skills in full-stack web development, UI/UX design, and AI/ML interests. It is easy to extend with additional sections, project items, or portfolio details.
