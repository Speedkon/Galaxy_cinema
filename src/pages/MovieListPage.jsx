import React, { useState, useEffect } from 'react';
import Navbar from '../components/Reusable/Navbar';
import MovieCard from '../components/UI/MovieCard';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { movieData } from '../assets/movieData';

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setMovies(movieData);
      setLoading(false);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar activeLink="Movies" />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-8">Now Playing</h1>

        {/* Feedback State: Loading */}
        {loading && <LoadingSpinner />}

        {/* Feedback State: Empty List */}
        {!loading && movies.length === 0 && (
          <div className="text-center py-20 bg-gray-900 rounded-xl">
            <h2 className="text-2xl text-gray-300 font-semibold">No Movies Currently Playing</h2>
            <p className="text-gray-500 mt-2">Please check back soon for new releases!</p>
          </div>
        )}

        {/* Data Display Screen - Responsive Grid (Mobile: 1, Tablet: 2, Desktop: 3) */}
        {!loading && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MovieListPage;