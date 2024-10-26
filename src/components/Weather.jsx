import { useState } from 'react';
import { useFetchWeather } from '../hooks/useFetchWeather';
import { useGeolocation } from '../hooks/useGeolocation';
import { WeatherCard } from './WeatherCard';
import { Forecast } from './Forecast';
import { Toast } from './Toast';
import { SearchBar } from './SearchBar';

export default function Weather() {
  const { loading, error: geoError, data: geoData } = useGeolocation();
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

  return (
    <div>
      {geoError && <Toast message={geoError.message} type='warning' />}
      {apiError && <Toast message={apiError.message} type='error' />}

      <div className='bg-white shadow-md p-2 rounded-lg mb-4 w-full'>
        <SearchBar setSearchQuery={setSearchQuery} />
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
