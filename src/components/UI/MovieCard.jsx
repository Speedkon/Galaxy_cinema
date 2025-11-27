import React from 'react';
import Button from '../Reusable/Button';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
      <img src={movie.imageUrl} alt={movie.title} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white truncate">{movie.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{movie.duration} | {movie.genre}</p>
        <Button variant="primary" onClick={() => console.log(`Booking for ${movie.title}`)}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;