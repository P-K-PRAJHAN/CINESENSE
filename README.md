# CineSense - Web Series Recommendation System

CineSense is a full-stack web application that provides personalized web series recommendations using a hybrid approach (Content-Based Filtering + Trending). It features a modern React frontend and a Flask backend powered by Machine Learning.

## 🚀 Features
- **Hybrid Recommendation Engine**:
  - **Content-Based**: Suggests shows similar to what you like using TF-IDF and Cosine Similarity.
  - **Trending**: Displays top-rated series from the dataset.
- **Search Functionality**: Instantly find web series by title.
- **Detailed Insights**: View cast, plot, genre, and ratings (enriched via OMDb API).
- **Modern UI**: Responsive dark-mode interface built with React and Tailwind CSS.
- **Authentication**: Secure login via Firebase (ready for integration).

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS, Axios, Firebase SDK
- **Backend**: Flask, Pandas, Scikit-Learn, NumPy
- **Data**: Custom Dataset + OMDb API for metadata

## 📂 Project Structure
```
CineSense/
├── backend/                 # Flask Server & ML Logic
│   ├── data/               # Dataset (CSV)
│   ├── app.py              # API Routes
│   ├── recommender.py      # ML Recommendation Engine
│   ├── api_clients.py      # OMDb API Wrapper
│   └── requirements.txt    # Python Dependencies
│
└── frontend/                # React Client
    ├── src/
    │   ├── components/     # Reusable UI Components
    │   ├── pages/          # Application Pages
    │   └── services/       # API & Firebase Config
    └── tailwind.config.js  # Styling Config
```

## ⚡ Getting Started

### Prerequisites
- Node.js & npm installed
- Python 3.x installed

### 1. Backend Setup (Flask)
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # Mac/Linux:
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure Environment Variables:
   - Open `.env` file in `backend/`.
   - Add your OMDb API Key:
     ```env
     OMDB_API_KEY=your_api_key_here
     ```
5. Run the server:
   ```bash
   python app.py
   ```
   *Server runs at `http://localhost:5000`*

### 2. Frontend Setup (React)
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *App runs at `http://localhost:5173`*

## 🔐 Firebase Setup (Optional for Auth)
To enable login features:
1. Create a project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Google/Email provider).
3. Copy your web app config.
4. Update `frontend/src/services/firebase.js` with your keys.

## 🧪 Testing
- **Backend**: Run `python test_recommender.py` in the backend folder to verify the ML logic.
- **Frontend**: Browse `http://localhost:5173` to test the UI.

## 📝 License
This project is open-source and available for educational purposes.
