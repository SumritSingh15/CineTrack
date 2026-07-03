// shown when no movies match the current filter/search
function EmptyState({ message }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
      <span className="text-5xl mb-3">🍿</span>
      <p className="text-base font-semibold text-[#8a8ab0] mb-1.5">
        {message || 'No movies found'}
      </p>
      <p className="text-sm text-[#5a5a7a]">
        Try adjusting your filters or add a new movie.
      </p>
    </div>
  );
}

export default EmptyState;
