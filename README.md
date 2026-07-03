# CineTrack 🎬

A responsive movie watchlist and review interface built with **React.js**, **Vite**, and **Tailwind CSS**. Manage your personal movie collection — add, filter, search, mark as watched, and delete movies with data persisted in localStorage.

> **Note:** The TMDB API integration is currently not working due to API rate limits and access restrictions. As a workaround, the application uses **hardcoded movie data** (20 popular movies) as the default dataset. The app is fully functional with local data — all CRUD operations work via localStorage persistence.

---

## Features

- **Dashboard View** — Responsive grid layout displaying movie cards with poster, title, genre, release year
- **Add Movie Form** — Structured collapsible form with client-side validation (required fields, year range, URL format)
- **Status Filter** — Centered tab-based filter for All / Watched / Unwatched movies
- **Search** — Real-time client-side search by movie title (integrated in the navbar)
- **Watched Toggle** — Mark/unmark movies as watched with blue visual indicators
- **Delete** — Remove movies from your collection
- **Persistence** — All data saved to localStorage (survives page refresh)
- **Loading State** — Skeleton loaders with pulse animation during initial data load
- **Responsive** — Fully responsive across mobile (2-col), tablet (3-col), and desktop (4-5 col)
- **Gradient UI** — Dark theme with distinct gradient backgrounds for navbar and body

---

## Tech Stack

| Technology | Purpose |
|
| React 19 | UI component library |
| Vite 8 | Build tool & dev server |
| Tailwind CSS 4 | Utility-first CSS framework |
| localStorage | Client-side data persistence |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/cinetrack.git
   cd cinetrack
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

---

## Available Scripts

| Command | Description |
|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production-ready build in `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```
cinetrack/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Top navbar with branding, stats, and search bar
│   │   ├── MovieCard.jsx          # Individual movie card with poster and actions
│   │   ├── MovieCardSkeleton.jsx  # Skeleton loading placeholder for cards
│   │   ├── AddMoviePanel.jsx      # Collapsible form to add new movies
│   │   ├── MovieFilters.jsx       # Centered filter tabs (All/Watched/Unwatched)
│   │   └── EmptyState.jsx         # Friendly empty state when no movies match
│   ├── data/
│   │   └── moviesData.js          # Hardcoded seed data (20 popular movies)
│   ├── App.jsx                    # Root component with state management
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Tailwind CSS imports and global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## About the Data

The application was originally designed to fetch movie data from the **TMDB (The Movie Database) API**. However, due to API access restrictions and rate limiting issues, the TMDB integration is currently not functional.

As a workaround, the app ships with a **hardcoded dataset of 20 popular movies** in `src/data/moviesData.js`. This includes well-known titles like Inception, The Dark Knight, Interstellar, Parasite, The Godfather, and more.

All movie data (including any movies added by the user) is persisted in the browser's **localStorage**, so your watchlist survives page refreshes.

---

## License

MIT
