import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { citiesData } from '../data/MockData';
import { displayTemp } from '../utils/tempConverter';

const CityDetails = () => {
  const { id } = useParams();
  const { unit } = useSelector(state => state.weather);
  
  const city = citiesData.find(c => c.id === parseInt(id));

  if (!city) return <div>Nie znaleziono miasta!</div>;

  return (
    <div className="details-page">
      <Link to="/" className="back-link">← Wróć</Link>
      <h1>{city.name}</h1>
      
      <div className="current-weather">
        <div className="main-info">
          <span className="icon-large">{city.current.condition}</span>
          <span className="temp-large">{displayTemp(city.current.temp, unit)}</span>
          <p>{city.current.conditionText}</p>
        </div>
        
        <div className="details-grid">
          <div className="detail-item">
            <span>Wiatr:</span> {city.current.wind} km/h {city.current.windDir}
          </div>
          <div className="detail-item">
            <span>Opady:</span> {city.current.rainChance}% ({city.current.rainAmount} mm)
          </div>
          <div className="detail-item">
            <span>Ciśnienie:</span> {city.current.pressure} hPa
          </div>
          <div className="detail-item">
            <span>Zachmurzenie:</span> {city.current.clouds}%
          </div>
        </div>
      </div>

      <h3>Prognoza na 5 dni</h3>
      <div className="forecast-list">
        {city.forecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <span className="day-name">{day.day}</span>
            <span className="forecast-icon">{day.condition}</span>
            <span className="forecast-temp">{displayTemp(day.temp, unit)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityDetails;