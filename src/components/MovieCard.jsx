import { useState } from 'react';

// single movie card with poster, info, and action buttons
function MovieCard({ movie, onToggleWatched, onDelete }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`bg-[#161b2e] rounded-2xl overflow-hidden border transition-all duration-200 hover:shadow-xl hover:-translate-y-1 ${movie.watched ? 'border-blue-500/30' : 'border-[#252b45]'}`}>
      {/* poster - uses 4:5 aspect ratio for shorter cards */}
      <div className="relative aspect-5/4 bg-[#1e2440] overflow-hidden">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#4a4a6a]">
            <span className="text-4xl">🎞️</span>
            <p className="text-xs">No Poster</p>
          </div>
        ) : (<img src={movie.posterUrl} alt={`${movie.title} poster`} onError={() => setImgError(true)} loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />)}
        {movie.watched && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] font-semibold px-2 py-1 rounded-md flex items-center gap-1">
            ✓ Watched
          </div>
        )}
      </div>

      {/* movie info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white truncate mb-1.5" title={movie.title}>
          {movie.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full font-medium">
            {movie.genre}
          </span>
          <span className="text-[11px] text-[#6b6b8a] font-medium">{movie.releaseYear}</span>
        </div>
      </div>

      {/* action buttons */}
      <div className="px-3 pb-3 flex gap-2">
        <button
          onClick={() => onToggleWatched(movie.id)}
          title={movie.watched ? 'Mark as unwatched' : 'Mark as watched'}
          className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${movie.watched
              ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30 hover:bg-blue-500/25'
              : 'bg-[#1e2440] text-[#8a8ab0] border border-[#252b45] hover:text-blue-400 hover:border-blue-500/40'
            }`}
        >
          {movie.watched ? '✓ Watched' : '○ Mark Watched'}
        </button>
        <button
          onClick={() => onDelete(movie.id)}
          title="Delete movie"
          className="flex-1 py-1.5 rounded-lg text-xs font-medium bg-red-500/8 text-red-400 border border-red-500/15 hover:bg-red-500/15 hover:border-red-500/40 transition-colors cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
