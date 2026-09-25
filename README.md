# Coffee Aroma — Full Stack Landing Page

A modern full-stack coffee shop landing page built with React, Express, PostgreSQL, and Supabase.

The Home page is fully connected from frontend to backend to database and deployed online.

---

## Live Demo

- **Frontend:** https://coffee-shop-two-sandy.vercel.app/
- **Backend API:** https://coffee-shop-api-3jb9.onrender.com

---

## Features

### Frontend
- Responsive coffee shop landing page
- Header with mobile navigation
- Hero section
- Features section
- Menu section (dynamic from database)
- Testimonials section (dynamic from database)
- Contact form (saves messages to database)
- Footer

### Backend
- REST API with Express
- PostgreSQL database hosted on Supabase
- Classic SQL queries using `pg`
- Endpoints for:
  - Menu
  - Features
  - Testimonials
  - Contact messages

### Deployment
- Frontend deployed on **Vercel**
- Backend deployed on **Render**
- Database hosted on **Supabase**

---

## Tech Stack

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- Axios
- Lucide React / React Icons

### Backend
- Node.js
- Express
- PostgreSQL
- `pg` (node-postgres)
- CORS
- dotenv

### Database
- Supabase (PostgreSQL)

### Hosting
- Vercel (frontend)
- Render (backend)
- Supabase (database)

---

## Project Structure

```text
React Project/
├── coffee-shop/              # Frontend (React + Vite)
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── types/
│   │   └── App.tsx
│   └── ...
│
└── coffee-shop-api/          # Backend (Express + PostgreSQL)
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   ├── lib/
    │   └── index.ts
    └── ...
