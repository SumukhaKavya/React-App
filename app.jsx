import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
import { Routes, Route } from 'react-router-dom';

const unsplash = createApi({
  accessKey: '5-XSq7Kdn2KVJzi7cicmuxhhVwZD4Kq5sotTO46f7rw',
});

const Search = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  const searchImages = async () => {
    setLoading(true);
    setError(null);

    const response = await unsplash.search.getPhotos({
      query,
      perPage: 12,
    });

    if (response.errors) {
      console.error(response.errors[0]);
      setError('An error occurred while searching for images');
    } else {
      setResults(response.response.results);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchImages();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {loading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {results.length === 0 && !loading && !error && <div>No images found</div>}

      {results.map((result) => (
        <a key={result.id} href={result.urls.regular}>
          <img src={result.urls.small} alt={result.alt_description} />
        </a>
      ))}
    </div>
  );
};

const About = () => {
  return <h1>About Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
