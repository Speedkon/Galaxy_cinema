import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
// В реальном приложении нужно установить 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Default Route: Movie Listing (Data Display) */}
          <Route path="/" element={<MovieListPage />} />
          <Route path="/movies" element={<MovieListPage />} />
          
          {/* Authentication Flow (Main Form Screen) */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Booking Flow (Main Form Screen & Success/Error State) */}
          <Route path="/book/:movieId" element={<BookingPage />} />
          {/* Редирект на главную для простоты */}
          <Route path="*" element={<MovieListPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;