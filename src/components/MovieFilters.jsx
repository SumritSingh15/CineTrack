const FILTER_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'watched', label: 'Watched' },
  { value: 'unwatched', label: 'Unwatched' },
];

// horizontal filter tabs - centered, lets user switch between all/watched/unwatched
function MovieFilters({ activeFilter, onFilterChange, resultCount }) {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <div className="inline-flex items-center gap-1 bg-[#161b2e] border border-[#252b45] rounded-xl p-1">
        {FILTER_OPTIONS.map((opt) => (
          <button key={opt.value} onClick={() => onFilterChange(opt.value)} className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${activeFilter === opt.value ? 'bg-blue-600 text-white shadow-md' : 'text-[#8a8ab0] hover:text-white hover:bg-[#1e2440]'}`}>
            {opt.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-[#6b6b8a]">
        Showing {resultCount} {resultCount === 1 ? 'movie' : 'movies'}
      </p>
    </div>
  );
}

export default MovieFilters;
