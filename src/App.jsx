import { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import MovieFilters from './components/MovieFilters';
import AddMoviePanel from './components/AddMoviePanel';
import MovieCard from './components/MovieCard';
import MovieCardSkeleton from './components/MovieCardSkeleton';
import EmptyState from './components/EmptyState';
import moviesData from './data/moviesData';

const STORAGE_KEY = 'cinetrack_movies_v2';

// try loading movies from localStorage, return null if empty or invalid
function loadMovies() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (err) {
    console.error('Failed to load from localStorage:', err);
  }
  return null;
}

// save movies array to localStorage
function saveMovies(movies) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }
}

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // load movies with a small delay to show skeleton loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      const stored = loadMovies();
      setMovies(stored || moviesData);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // auto-save to localStorage when movies change
  useEffect(() => {
    if (!loading) saveMovies(movies);
  }, [movies, loading]);

  // filter + search
  const filteredMovies = useMemo(() => {
    let result = movies;

    if (filter === 'watched') result = result.filter((m) => m.watched);
    else if (filter === 'unwatched') result = result.filter((m) => !m.watched);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((m) => m.title.toLowerCase().includes(q));
    }
    return result;
  }, [movies, filter, searchQuery]);

  const totalCount = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = totalCount - watchedCount;

  const handleAddMovie = (movie) => setMovies((prev) => [movie, ...prev]);
  const handleToggleWatched = (id) => setMovies((prev) => prev.map((m) => m.id === id ? { ...m, watched: !m.watched } : m));
  const handleDelete = (id) => setMovies((prev) => prev.filter((m) => m.id !== id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#0f1629] to-[#0b1120]">
      <Navbar
        totalCount={totalCount}
        watchedCount={watchedCount}
        unwatchedCount={unwatchedCount}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <AddMoviePanel onAddMovie={handleAddMovie} />

        <MovieFilters
          activeFilter={filter}
          onFilterChange={setFilter}
          resultCount={loading ? 0 : filteredMovies.length}
        />

        {/* movie grid - fewer columns = wider cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => <MovieCardSkeleton key={i} />)
          ) : filteredMovies.length === 0 ? (
            <EmptyState
              message={
                searchQuery
                  ? `No results for "${searchQuery}"`
                  : filter !== 'all'
                    ? `No ${filter} movies yet`
                    : 'Your watchlist is empty'
              }
            />
          ) : (
            filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onToggleWatched={handleToggleWatched}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
