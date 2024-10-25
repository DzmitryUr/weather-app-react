import { useState } from 'react';
import { useFetchWeather } from '../hooks/useFetchWeather';
import ReactGA from 'react-ga4';
import useGeolocation from '../hooks/useGeolocation';
import { WeatherCard } from './WeatherCard';
import { Forecast } from './Forecast';
import { Toast } from './Toast';

export default function Weather() {
  const { loading, error: geoError, data: geoData } = useGeolocation();
  const [city, setCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const {
    data,
    error: apiError,
    isLoading: apiLoading,
  } = useFetchWeather(geoData, searchQuery);

  if (loading || apiLoading) {
    return <Toast message='Loading ...' type='info' />;
  }

  const { currentWeather, forecast } = data || {};

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setSearchQuery(city.trim());
      ReactGA.event({
        category: 'Search Bar',
        action: 'City_provided',
        label: city,
      });
    }
  };

  return (
    <div>
      {geoError && <Toast message={geoError.message} type='warning' />}
      {apiError && <Toast message={apiError.message} type='error' />}
      <div className='bg-white shadow-md p-2 rounded-lg mb-4 w-full'>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Enter city name'
            className='p-2 border border-gray-300 rounded'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type='submit'
            className='ml-2 p-2 bg-blue-500 text-white rounded'
          >
            Search
          </button>
        </form>
      </div>

      {currentWeather && (
        <div className='bg-white shadow-md p-6 rounded-lg mb-4 w-full'>
          <WeatherCard data={currentWeather} />
        </div>
      )}

      {forecast && (
        <div className='bg-white shadow-md p-6 rounded-lg mb-4 w-full'>
          <Forecast forecast={forecast} />
        </div>
      )}
    </div>
  );
}
