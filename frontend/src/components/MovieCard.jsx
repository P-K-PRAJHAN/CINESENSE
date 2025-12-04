import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/series/${movie.Title}`} className="block transform transition duration-300 hover:scale-105">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full">
                <img
                    src={movie['Poster URL'] || movie.Poster || 'https://via.placeholder.com/300x450'}
                    alt={movie.Title}
                    className="w-full h-64 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-bold truncate">{movie.Title}</h3>
                    <p className="text-sm text-gray-400">{movie['Release Year'] || movie.Year}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {movie.Genres && movie.Genres.split(',').slice(0, 2).map((genre, idx) => (
                            <span key={idx} className="text-xs bg-secondary px-2 py-1 rounded text-white">
                                {genre.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
