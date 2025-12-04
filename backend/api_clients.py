import requests
import os

class APIClients:
    def __init__(self):
        self.omdb_key = os.getenv('OMDB_API_KEY')

    def fetch_omdb_details(self, title):
        if not self.omdb_key:
            return None
        url = f"http://www.omdbapi.com/?t={title}&apikey={self.omdb_key}"
        response = requests.get(url)
        if response.status_code == 200:
            return response.json()
        return None
