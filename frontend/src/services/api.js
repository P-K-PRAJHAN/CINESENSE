import axios from 'axios';

const API_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: API_URL,
});

export const getRecommendations = async (title) => {
    const response = await api.get(`/recommend/content/${title}`);
    return response.data;
};

export const getTrending = async () => {
    const response = await api.get('/recommend/trending');
    return response.data;
};

export const searchSeries = async (query) => {
    const response = await api.get(`/search?q=${query}`);
    return response.data;
};

export const getSeriesDetails = async (title) => {
    const response = await api.get(`/series/${title}`);
    return response.data;
};

export default api;
