from recommender import Recommender
import os

# Setup path
dataset_path = os.path.join(os.path.dirname(__file__), 'data', 'dataset.csv')
rec = Recommender(dataset_path)

# Test Content Recommendations
print("Testing Recommendations for 'Stranger Things':")
recommendations = rec.get_content_recommendations('Stranger Things')
for r in recommendations:
    print(f"- {r['Title']}")

# Test Search
print("\nTesting Search for 'Breaking':")
results = rec.search('Breaking')
for r in results:
    print(f"- {r['Title']}")
