import { FiSearch, FiX } from 'react-icons/fi';

// top navbar with branding, centered search, and movie stats
const Navbar = ({ totalCount, watchedCount, unwatchedCount, searchQuery, onSearchChange }) => {
  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-[#1a1c2e] via-[#2d1b69] to-[#1a1c2e] border-b border-[#3d2d7a]/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">

          {/* logo */}
          <div className="shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 tracking-tight">
              <span className="text-2xl">🎬</span>
              CineTrack
            </h1>
            <p className="text-[#8b7fc7] text-xs mt-0.5">Your personal movie watchlist</p>
          </div>

          {/* search bar - centered on md+, hidden on small screens */}
          <div className="hidden md:block flex-1 max-w-md mx-auto">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b6b8a] text-sm" />
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-[#0f1225]/60 border border-[#3d2d7a]/40 rounded-full py-2 pl-9 pr-9 text-sm text-white placeholder-[#6b6b8a] focus:outline-none focus:border-blue-500/60 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b8a] hover:text-white transition-colors cursor-pointer"
                >
                  <FiX size={16} />
                </button>
              )}
            </div>
          </div>

          {/* stats of total,watched,unwatched */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center">
              <p className="text-lg font-bold text-white">{totalCount}</p>
              <p className="text-[10px] text-[#8b7fc7] uppercase tracking-wider font-medium">Total</p>
            </div>
            <div className="w-px h-8 bg-[#3d2d7a]/50" />

            <div className="text-center">
              <p className="text-lg font-bold text-blue-400">{watchedCount}</p>
              <p className="text-[10px] text-[#8b7fc7] uppercase tracking-wider font-medium">Watched</p>
            </div>
            <div className="w-px h-8 bg-[#3d2d7a]/50" />

            <div className="text-center">
              <p className="text-lg font-bold text-amber-400">{unwatchedCount}</p>
              <p className="text-[10px] text-[#8b7fc7] uppercase tracking-wider font-medium">Unwatched</p>
            </div>
          </div>
        </div>

        {/* search bar - full width on mobile only */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b6b8a] text-sm" />
            <input type="text" placeholder="Search movies..." value={searchQuery} onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[#0f1225]/60 border border-[#3d2d7a]/40 rounded-full py-2 pl-9 pr-9 text-sm text-white placeholder-[#6b6b8a] focus:outline-none focus:border-blue-500/60 transition-colors" />
            {searchQuery && (
              <button onClick={() => onSearchChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b8a] hover:text-white transition-colors cursor-pointer">
                <FiX size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}


export default Navbar;
