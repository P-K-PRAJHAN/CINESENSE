import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSeriesDetails, getRecommendations } from '../services/api';
import MovieCard from '../components/MovieCard';

const Details = () => {
    const { title } = useParams();
    const [series, setSeries] = useState(null);
    const [similar, setSimilar] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const details = await getSeriesDetails(title);
                setSeries(details);

                const recs = await getRecommendations(title);
                setSimilar(recs);
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };
        fetchData();
    }, [title]);

    if (!series) return <div className="text-center p-10">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
                <img
                    src={series['Poster URL'] || series.Poster}
                    alt={series.Title}
                    className="w-full md:w-1/3 rounded-lg shadow-xl"
                />
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-2">{series.Title}</h1>
                    <div className="flex gap-4 text-gray-400 mb-4">
                        <span>{series['Release Year'] || series.Year}</span>
                        <span>{series.Genres || series.Genre}</span>
                        <span className="text-yellow-500">★ {series['IMDb Rating'] || series.imdbRating}</span>
                    </div>
                    <p className="text-lg leading-relaxed mb-6">{series.Description || series.Plot}</p>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Cast</h3>
                        <p className="text-gray-300">{series.Cast || series.Actors}</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Similar Series</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {similar.map((movie, idx) => (
                    <MovieCard key={idx} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Details;
