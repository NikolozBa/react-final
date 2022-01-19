import React from 'react';
import PokemonApp from './components/pokemonComponents/PokemonApp'
import MoviesApp from './components/moviesComponents/MoviesApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homeComponents/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonApp />} />
        <Route path="/movies" element={<MoviesApp />} />
      </Routes>
    </Router>
  );
}

export default App;
