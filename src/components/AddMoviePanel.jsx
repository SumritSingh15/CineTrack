import { useState } from 'react';

const GENRES = [
  'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi',
  'Thriller', 'Animation', 'Romance', 'Crime', 'Documentary',
  'Fantasy', 'Adventure', 'Mystery',
];

const currentYear = new Date().getFullYear();

// collapsible form to add a new movie to the collection
function AddMoviePanel({ onAddMovie }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    releaseYear: '',
    posterUrl: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // check all fields and return error messages for invalid ones
  const validate = () => {
    const err = {};

    if (!formData.title.trim()) err.title = 'Title is required';

    if (!formData.genre) err.genre = 'Please select a genre';

    const year = parseInt(formData.releaseYear, 10);
    if (!formData.releaseYear) {
      err.releaseYear = 'Release year is required';
    } else if (isNaN(year) || year < 1888 || year > currentYear + 5) {
      err.releaseYear = `Year must be between 1888 and ${currentYear + 5}`;
    }

    if (!formData.posterUrl.trim()) {
      err.posterUrl = 'Poster URL is required';
    } else {
      try {
        new URL(formData.posterUrl);
      } catch {
        err.posterUrl = 'Enter a valid URL';
      }
    }

    return err;
  };

  // update field value and clear its error if user already tried submitting
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitted && errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    onAddMovie({
      id: Date.now(),
      title: formData.title.trim(),
      genre: formData.genre,
      releaseYear: parseInt(formData.releaseYear, 10),
      posterUrl: formData.posterUrl.trim(),
      watched: false,
    });

    // reset everything
    setFormData({ title: '', genre: '', releaseYear: '', posterUrl: '' });
    setErrors({});
    setSubmitted(false);
    setIsOpen(false);
  };

  const inputClass = (field) =>
    `w-full bg-[#0f1225] border rounded-lg py-2.5 px-3 text-sm text-white placeholder-[#4a4a6a] focus:outline-none focus:border-blue-500/60 transition-colors ${errors[field] ? 'border-red-500' : 'border-[#252b45]'
    }`;

  return (
    <div className="pt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
      >
        {isOpen ? '− Close Form' : '+ Add Movie'}
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} noValidate className="mt-3 bg-[#161b2e] border border-[#252b45] rounded-2xl p-5">

          {/* title + genre row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <div className="flex-1">
              <label htmlFor="title" className="block text-xs font-medium text-[#8a8ab0] uppercase tracking-wider mb-1.5">Title</label>
              <input type="text" id="title" name="title" placeholder="e.g. The Godfather" value={formData.title} onChange={handleChange} className={inputClass('title')} />
              {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="genre" className="block text-xs font-medium text-[#8a8ab0] uppercase tracking-wider mb-1.5">Genre</label>
              <select id="genre" name="genre" value={formData.genre} onChange={handleChange} className={`${inputClass('genre')} appearance-none cursor-pointer`}>
                <option value="">Select genre</option>
                {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
              {errors.genre && <p className="text-red-400 text-xs mt-1">{errors.genre}</p>}
            </div>
          </div>

          {/* year + poster url row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1">
              <label htmlFor="releaseYear" className="block text-xs font-medium text-[#8a8ab0] uppercase tracking-wider mb-1.5">Release Year</label>
              <input type="number" id="releaseYear" name="releaseYear" placeholder="e.g. 2024" value={formData.releaseYear} onChange={handleChange} min="1888" max={currentYear + 5} className={inputClass('releaseYear')} />
              {errors.releaseYear && <p className="text-red-400 text-xs mt-1">{errors.releaseYear}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="posterUrl" className="block text-xs font-medium text-[#8a8ab0] uppercase tracking-wider mb-1.5">Poster URL</label>
              <input type="url" id="posterUrl" name="posterUrl" placeholder="https://example.com/poster.jpg" value={formData.posterUrl} onChange={handleChange} className={inputClass('posterUrl')} />
              {errors.posterUrl && <p className="text-red-400 text-xs mt-1">{errors.posterUrl}</p>}
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer">
            Add Movie to Collection
          </button>
        </form>
      )}
    </div>
  );
}

export default AddMoviePanel;
