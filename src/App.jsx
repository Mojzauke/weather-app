import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUnit } from './store/weatherSlice';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import CityDetails from './pages/CityDetails';
import './App.css';

function App() {
  const unit = useSelector(state => state.weather.unit);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Pogoda App</Link>
          <Link to="/favorites">Ulubione</Link>
        </div>
        <button onClick={() => dispatch(toggleUnit())} className="unit-btn">
          Jednostka: {unit}
        </button>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/city/:id" element={<CityDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;