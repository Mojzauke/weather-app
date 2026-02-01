import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { citiesData } from '../data/MockData';
import { toggleFavorite } from '../store/weatherSlice';
import { displayTemp } from '../utils/tempConverter';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { unit, favorites } = useSelector(state => state.weather);
  const dispatch = useDispatch();

  const filteredCities = citiesData.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Lista Miejscowości</h2>
      <input
        type="text"
        placeholder="Szukaj miasta..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="city-list">
        {filteredCities.map(city => (
          <div key={city.id} className="city-card">
            <h3>{city.name}</h3>
            <div className="temp-display">
              {city.current.condition} {displayTemp(city.current.temp, unit)}
            </div>
            <div className="card-actions">
              <Link to={`/city/${city.id}`} className="details-btn">Szczegóły</Link>
              <button 
                onClick={() => dispatch(toggleFavorite(city.id))}
                className={`fav-btn ${favorites.includes(city.id) ? 'active' : ''}`}
              >
                {favorites.includes(city.id) ? '★' : '☆'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;