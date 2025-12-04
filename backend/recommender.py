import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os

class Recommender:
    def __init__(self, dataset_path):
        self.dataset_path = dataset_path
        self.df = None
        self.cosine_sim = None
        self.indices = None
        self.load_data()

    def load_data(self):
        if os.path.exists(self.dataset_path):
            self.df = pd.read_csv(self.dataset_path)
            self.df['combined_features'] = self.df['Description'] + " " + self.df['Genres'] + " " + self.df['Cast']
            self.df['combined_features'] = self.df['combined_features'].fillna('')
            self.compute_similarity()
        else:
            print(f"Dataset not found at {self.dataset_path}")

    def compute_similarity(self):
        tfidf = TfidfVectorizer(stop_words='english')
        tfidf_matrix = tfidf.fit_transform(self.df['combined_features'])
        self.cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)
        # Fix: Use a dictionary for title to index mapping to avoid Pandas indexing issues
        self.indices = {title: idx for idx, title in zip(self.df.index, self.df['Title'])}

    def get_top_rated(self, top_n=5):
        # Sort by IMDb Rating
        return self.df.sort_values(by='IMDb Rating', ascending=False).head(top_n).to_dict('records')

    def get_content_recommendations(self, title, top_n=5):
        if title not in self.indices:
            return []
        
        idx = self.indices[title]
        sim_scores = list(enumerate(self.cosine_sim[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[1:top_n+1]
        
        movie_indices = [i[0] for i in sim_scores]
        return self.df.iloc[movie_indices].to_dict('records')

    def get_all_series(self):
        return self.df.to_dict('records')

    def search(self, query):
        return self.df[self.df['Title'].str.contains(query, case=False, na=False)].to_dict('records')
