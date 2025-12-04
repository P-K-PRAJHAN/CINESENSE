from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv
from recommender import Recommender
from api_clients import APIClients

load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize Recommender and API Clients
DATASET_PATH = os.path.join(os.path.dirname(__file__), 'data', 'dataset.csv')
recommender = Recommender(DATASET_PATH)
api_clients = APIClients()

@app.route('/')
def home():
    return jsonify({"message": "CineSense Backend is Running"})

@app.route('/series', methods=['GET'])
def get_all_series():
    return jsonify(recommender.get_all_series())

@app.route('/series/<title>', methods=['GET'])
def get_series_details(title):
    # Try to get from dataset first
    series = next((item for item in recommender.get_all_series() if item["Title"].lower() == title.lower()), None)
    
    # Enrich with OMDb if available
    omdb_data = api_clients.fetch_omdb_details(title)
    if series and omdb_data:
        series.update(omdb_data)
    elif omdb_data:
        series = omdb_data
        
    if series:
        return jsonify(series)
    return jsonify({"error": "Series not found"}), 404

@app.route('/recommend/content/<title>', methods=['GET'])
def recommend_content(title):
    recommendations = recommender.get_content_recommendations(title)
    return jsonify(recommendations)

@app.route('/recommend/trending', methods=['GET'])
def recommend_trending():
    # Return top 5 rated series from local dataset
    trending = recommender.get_top_rated(5)
    return jsonify(trending)

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q', '')
    results = recommender.search(query)
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
