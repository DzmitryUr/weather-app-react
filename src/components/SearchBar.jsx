import { useState } from 'react';
import ReactGA from 'react-ga4';

export function SearchBar({ setSearchQuery }) {
  const [city, setCity] = useState('');

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
    <form onSubmit={handleSearch}>
      <input
        type='text'
        placeholder='Enter city name'
        className='p-2 border border-gray-300 rounded'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type='submit' className='ml-2 p-2 bg-blue-500 text-white rounded'>
        Search
      </button>
    </form>
  );
}
