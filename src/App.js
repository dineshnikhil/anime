import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Top from './components/top10/Top';
import Trending from './components/trending/Trending';
import Article from './components/article/Article';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top10" element={<Top />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/anime/:id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
