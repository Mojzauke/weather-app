import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { citiesData } from '../data/MockData';
import { toggleFavorite } from '../store/weatherSlice';
import { displayTemp } from '../utils/tempConverter';

const Favorites = () => {
  const { unit, favorites } = useSelector(state => state.weather);
  const dispatch = useDispatch();

  const favoriteCities = citiesData.filter(city => favorites.includes(city.id));

  return (
    <div className="page">
      <h2>Twoje Ulubione Miasta</h2>
      {favoriteCities.length === 0 ? (
        <p>Nie masz jeszcze ulubionych miast.</p>
      ) : (
        <div className="city-list">
          {favoriteCities.map(city => (
            <div key={city.id} className="city-card">
              <h3>{city.name}</h3>
              <p>{displayTemp(city.current.temp, unit)}</p>
              <div className="card-actions">
                <Link to={`/city/${city.id}`} className="details-btn">Szczegóły</Link>
                <button 
                  onClick={() => dispatch(toggleFavorite(city.id))}
                  className="fav-btn active"
                >
                  Usuń ★
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;