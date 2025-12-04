import React, { useEffect, useState } from 'react';
import { getTrending, getRecommendations } from '../services/api';
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [trending, setTrending] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching "Stranger Things" recommendations as a default "For You"
                const recs = await getRecommendations('Stranger Things');
                setRecommended(recs);

                // Fetch trending from backend
                const trendingData = await getTrending();
                setTrending(trendingData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Trending Now</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
                {trending && trending.length > 0 ? (
                    trending.map((movie, idx) => (
                        <MovieCard key={idx} movie={movie} />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full">Loading trending series...</p>
                )}
            </div>

            <h1 className="text-3xl font-bold mb-6">Recommended For You</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {recommended && recommended.length > 0 ? (
                    recommended.map((movie, idx) => (
                        <MovieCard key={idx} movie={movie} />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full">Loading recommendations...</p>
                )}
            </div>
        </div>
    );
};

export default Home;
