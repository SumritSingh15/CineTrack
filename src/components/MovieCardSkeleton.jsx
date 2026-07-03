// skeleton placeholder shown while movies are loading
function MovieCardSkeleton() {
  return (
    <div className="bg-[#161b2e] rounded-2xl overflow-hidden border border-[#252b45]">
      <div className="aspect-[5/4] bg-[#1e2440] animate-pulse" />
      <div className="p-3 space-y-2.5">
        <div className="h-3.5 bg-[#1e2440] rounded animate-pulse w-3/4" />
        <div className="flex gap-2">
          <div className="h-5 w-14 bg-[#1e2440] rounded-full animate-pulse" />
          <div className="h-3.5 w-10 bg-[#1e2440] rounded animate-pulse self-center" />
        </div>
      </div>
      <div className="px-3 pb-3 flex gap-2">
        <div className="flex-1 h-7 bg-[#1e2440] rounded-lg animate-pulse" />
        <div className="flex-1 h-7 bg-[#1e2440] rounded-lg animate-pulse" />
      </div>
    </div>
  );
}

export default MovieCardSkeleton;
