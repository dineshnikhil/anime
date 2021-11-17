import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Top from './components/top10/Top';
import Trending from './components/trending/Trending';
import Article from './components/article/Article';
import TvSeries from './components/tvseries/TvSeries';
import Movies from './components/movies/Movies';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="anime/" element={<Home />} />
          <Route path="anime/top10" element={<Top />} />
          <Route path="anime/trending" element={<Trending />} />
          <Route path="/anime/:id" element={<Article />} />
          <Route path="/anime/tvseries" element={<TvSeries />} />
          <Route path="/anime/movies" element={<Movies />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
