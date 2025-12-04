import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchSeries } from '../services/api';
import MovieCard from '../components/MovieCard';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q') || '');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const q = searchParams.get('q');
        if (q) {
            setQuery(q);
            performSearch(q);
        }
    }, [searchParams]);

    const performSearch = async (searchTerm) => {
        if (!searchTerm) return;
        try {
            const data = await searchSeries(searchTerm);
            setResults(data);
        } catch (error) {
            console.error("Search error:", error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams({ q: query }); // Update URL
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSearch} className="mb-8 flex gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for web series..."
                    className="flex-1 p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-secondary focus:outline-none"
                />
                <button type="submit" className="bg-secondary px-6 py-3 rounded font-bold hover:bg-red-700 transition">
                    Search
                </button>
            </form>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.map((movie, idx) => (
                    <MovieCard key={idx} movie={movie} />
                ))}
            </div>
            {results.length === 0 && query && <p className="text-center text-gray-500">No results found.</p>}
        </div>
    );
};

export default Search;
