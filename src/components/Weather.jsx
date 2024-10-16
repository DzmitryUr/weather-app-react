import { useState } from 'react';
import { useFetchWeather } from '../hooks/useFetchWeather';
import useGeolocation from '../hooks/useGeolocation';
import { WeatherCard } from './WeatherCard';
import { Forecast } from './Forecast';
import { SearchBar } from './SearchBar';
import { Error } from './Error';

export default function Weather() {
  const { loading, error, data: geoData } = useGeolocation();
  const [searchQuery, setSearchQuery] = useState('');
  const {
    data,
    error: apiError,
    isLoading: apiLoading,
  } = useFetchWeather(geoData, searchQuery);

  if (loading || apiLoading) {
    return <p className='text-blue-500 text-lg font-semibold'>Loading ...</p>;
  }

  const { currentWeather, forecast } = data || {};

  return (
    <div>
      {error && <Error message={error.message} />}
      {apiError && <Error message={apiError.message} />}

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
